export default function Pagination({
    currentPage,
    setCurrentPage,
    pageCount,
    paginate,
}) {
    return (
        <ol className="flex justify-center gap-1 text-xs font-medium mt-10">
            <li>
                <button
                    onClick={() =>
                        setCurrentPage(prev => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="inline-flex size-8 shadow items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
            {Array.from({ length: pageCount }, (_, index) => (
                <li key={index}>
                    <button
                        onClick={() => paginate(index + 1)}
                        className={`block size-8 rounded border shadow border-gray-100 text-center leading-8 text-gray-900 ${
                            currentPage === index + 1
                                ? 'bg-blue-700 text-white'
                                : 'bg-white'
                        }`}
                    >
                        {index + 1}
                    </button>
                </li>
            ))}

            <li>
                <button
                    onClick={() =>
                        setCurrentPage(prev => Math.min(prev + 1, pageCount))
                    }
                    disabled={currentPage === pageCount}
                    className="inline-flex size-8 shadow items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
        </ol>
    );
}
