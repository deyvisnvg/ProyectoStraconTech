import React, { useState, useEffect } from 'react';
import { productosService, solicitudCompraService, proveedorService } from '../../lib/services';
import { Product } from '../../types/core';
import { Paginacion, SelectSearch } from '../../components';

export default function SolicitudComprasPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsTemp, setProductsTemp] = useState<Product[]>([]);
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(5);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [cantidad, setCantidad] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseProductos = await productosService.getAll();
                setProducts(responseProductos.data)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelectProduct = (product: Product) => {
        setSelectedProducts([...selectedProducts, product]);
    };

    const handleQuantityChange = (productId: number, quantity: number) => {
        setCantidad({ ...cantidad, [productId]: quantity });
    };

    // Submit formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Enviar datos de la solicitud compra a la API
        const requestData = {
            estado: null,
            solicituds: selectedProducts.map((product) => ({
                producto: product.id,
                cantidad: cantidad[product.id] || 0
            })),
        };
        await solicitudCompraService.post(requestData);
        alert("Se registro correctamente");
    };

    // Filtrar productos
    const filteredProducts = productsTemp.filter((product: any) =>
        product.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Indices para la paginación
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2 className="text-xl font-semibold mb-6">Formulario de Solicitud de Compra</h2>
            <SelectSearch
                proveedorService={proveedorService}
                products={products}
                setProductsTemp={setProductsTemp}
            />
            <form onSubmit={handleSubmit} className="space-y-4">
                <p className="font-bold">Productos</p>
                <input
                    type="text"
                    placeholder="Buscar producto"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border rounded px-2 py-1 w-full"
                />
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nombre Producto</th>
                            <th className="border px-4 py-2">Stock</th>
                            <th className="border px-4 py-2">Precio unitario</th>
                            <th className="border px-4 py-2">Cantidad</th>
                            <th className="border px-4 py-2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentProducts.map((product) => (
                                <tr className='text-center'>
                                    <td>{product.nombreProducto}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.precioUnitario}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={cantidad[product.id] || ''}
                                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                            className="border rounded px-2 py-1 w-20"
                                        />
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => handleSelectProduct(product)}
                                            disabled={selectedProducts.some(selectedProduct => selectedProduct.id === product.id)}
                                            className={`bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-sm 
                                                ${selectedProducts.some(selectedProduct => selectedProduct.id === product.id)
                                                    ? 'opacity-50 cursor-not-allowed'
                                                    : 'hover:bg-blue-700'}`}
                                        >
                                            Seleccionar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <ul className="mt-4">
                    <Paginacion
                        setCurrentPage={setCurrentPage}
                        productsPerPage={productsPerPage}
                        filteredProducts={filteredProducts}
                    />
                </ul>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Enviar Solicitud
                </button>
            </form>
        </div>
    );
};