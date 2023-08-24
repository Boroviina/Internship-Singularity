import React from 'react';

type PaginationProps = {
    className?: string;
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange, className }) => {
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className={`d-flex justify-content-end ${className}`}>
            <ul className="pagination mt-5">
                <li className={`page-item previous ${page === 1 && 'disabled'}`}>
                    <button onClick={() => handlePageChange(page - 1)} className="page-link">
                        <i className="previous"></i>
                    </button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item next ${page === totalPages && 'disabled'}`}>
                    <button
                        onClick={() => handlePageChange(page + 1)} className="page-link"
                        disabled={page === totalPages}
                    >
                        <i className="next"></i>
                    </button>
                </li>
            </ul>
        </div>
    );
};





// import React from 'react';
//
// const Pagination = () => {
//     return (
//         <nav aria-label="Job search pages">
//             <ul className="pagination justify-content-center">
//                 <li className="page-item disabled"><a className="page-link"
//                                                       href="#">Previous</a>
//                 </li>
//                 <li className="page-item"><a className="page-link" href="#">1</a></li>
//                 <li className="page-item"><a className="page-link" href="#">2</a></li>
//                 <li className="page-item"><a className="page-link" href="#">3</a></li>
//                 <li className="page-item"><a className="page-link" href="#">Next</a></li>
//             </ul>
//         </nav>
//     );
// };
//
// export default Pagination;