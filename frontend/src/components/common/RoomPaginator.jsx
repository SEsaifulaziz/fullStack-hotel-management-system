import React from "react";

const RoomPaginator = ({ currentPage, totalPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (__, i) => i + 1)
    return (
        <nav>
            <ui className="pagination justify-content-center">
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber}
                        className={`page-item ${currentPage === pageNumber ? "active" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>




                    </li>



                ))}


            </ui>




        </nav>
    )
}