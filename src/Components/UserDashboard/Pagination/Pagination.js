import { useState, useEffect, memo } from "react";
import { usePaginationPages } from "./usePaginationPages";

function Pagination({ gotoPage, length, pageSize, setPageSize }) {
    const [perPage, setPerPage] = useState(pageSize);

    const {
        canGo,
        currentPage,
        pages,
        goTo,
        goNext,
        goPrev
    } = usePaginationPages({
        gotoPage,
        length,
        pageSize
    });

    useEffect(() => {
        setPageSize(Number(perPage));
    }, [perPage, setPageSize]);

    return (
        <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center gap-3">
            <span>Show
                <select
                    className="p-1  rounded w-30 bg-white mx-2"
                    value={pageSize}
                    onChange={(e) => setPerPage(e.target.value)}
                >
                    {[10, 15, 20, 25, 30].map((pageSize) => (
                        <option className="py-2" value={pageSize} key={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
                entries
            </span>



            <div className="d-flex flex-row gap-2 justify-content-between align-items-center">
                <button
                    onClick={goPrev}
                    disabled={!canGo.previous}
                    className="pagination-btn"
                >
                    Previous
                </button>

                {pages.map((page, i) => (
                    <button
                        onClick={() => goTo(page)}
                        key={i}
                        className={`pagination-btn ${currentPage === page ? "active-btn" : ""}`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={goNext}
                    disabled={!canGo.next}
                    className="pagination-btn"
                >
                    Next
                </button>



            </div>
        </div>

    );
}

export default memo(Pagination);
