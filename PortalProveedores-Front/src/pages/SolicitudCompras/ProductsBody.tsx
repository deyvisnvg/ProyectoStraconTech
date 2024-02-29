export default function ProductsBody({ product, cantidad, handleQuantityChange, selectedProducts, handleSelectProduct }: any) {
    return (
        <>
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
                        disabled={selectedProducts.some((selectedProduct: any) => selectedProduct.id === product.id)}
                        className={`bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-sm 
                                                ${selectedProducts.some((selectedProduct: any) => selectedProduct.id === product.id)
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-blue-700'}`}
                    >
                        Seleccionar
                    </button>
                </td>
            </tr>
        </>
    )
}