import { useState } from 'react';

export default function SearchTable({ values, setValues }: any) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        // Filtrar productos
        const filteredProducts = values.productSelectSearch.filter((product: any) =>
        product.nombreProducto.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setValues({
            ...values,
            productSearchTable: filteredProducts
        });
    }

    return (
        <>
            <p className="font-bold">Productos</p>
            <input
                type="text"
                name="buscador"
                placeholder="Buscar producto"
                value={searchTerm}
                onChange={onChange}
                className="border rounded px-2 py-1 w-full"
            />
        </>
    )
}