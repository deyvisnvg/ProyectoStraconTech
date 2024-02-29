import React, { useState, useEffect } from 'react';
import { productosService, solicitudCompraService, proveedorService } from '../../lib/services';
import { Product } from '../../types/core';
import { Paginacion, SelectSearch } from '../../components';
import SearchTable from './SearchTable'
import ProductsBody from './ProductsBody'

export default function SolicitudComprasPage() {
    /* const [products, setProducts] = useState<Product[]>([]);*/
    const [values, setValues] = useState({
        products: [],
        productSelectSearch: [],
        productSearchTable: []
    });

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(5);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [cantidad, setCantidad] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseProductos = await productosService.getAll();
                setValues({
                    ...values,
                    products: responseProductos.data
                })
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const handleQuantityChange = (productId: number, quantity: number) => {
        setCantidad({ ...cantidad, [productId]: quantity });
    };

    const handleSelectProduct = (product: Product) => {
        setSelectedProducts([...selectedProducts, product]);
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

    // Indices para la paginación
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = values.productSearchTable.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2 className="text-xl font-semibold mb-6">Formulario de Solicitud de Compra</h2>
            <SelectSearch
                proveedorService={proveedorService}
                values={values}
                setValues={setValues}
                setCurrentPage={setCurrentPage}
            />
            <form onSubmit={handleSubmit} className="space-y-4">
                <SearchTable
                    values={values}
                    setValues={setValues}
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
                            currentProducts.map((product: Product) => (
                                <ProductsBody
                                    key={product.id}
                                    product={product}
                                    cantidad={cantidad}
                                    handleQuantityChange={handleQuantityChange}
                                    selectedProducts={selectedProducts}
                                    handleSelectProduct={handleSelectProduct}
                                />
                            ))
                        }
                    </tbody>
                </table>
                <ul className="mt-4">
                    <Paginacion
                        setCurrentPage={setCurrentPage}
                        productsPerPage={productsPerPage}
                        values={values}
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