import React from 'react';

type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className="d-flex justify-content-end">
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

