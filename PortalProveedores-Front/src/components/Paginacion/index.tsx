export default function Paginacion({ setCurrentPage, productsPerPage, values }: any) {
    const handlePagination = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    
    // Renderizar números de página
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(values.productSearchTable.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {
                pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => handlePagination(number)}
                        className="inline-block 
                            mx-1 cursor-pointer 
                            border rounded-full 
                            px-3 py-1 
                            bg-gray-200 
                            hover:bg-gray-300"
                    >
                        {number}
                    </li>
                ))
            }
        </>
    )
}