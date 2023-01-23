import React from "react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import { RiSearchLine } from "react-icons/ri";
import './UserDashboard.css';



export function GlobalFilter({ filter, setFilter }) {
    return (
        <>
            <div className="project-search-container ">
                <RiSearchLine className="" />
                <input
                    type="text"
                    placeholder="Search"
                    value={filter || ""} onChange={(e) => setFilter(e.target.value)}
                    className="project-search" />
            </div>
        </>
    );
}


function Table({ columns, data, headline }) {
    const memoisedColumns = React.useMemo(() => {
        return columns;
    }, [columns]);

    const memoisedData = React.useMemo(() => {
        return data;
    }, [data]);

    const tableInstance = useTable({
        columns: memoisedColumns,
        data: memoisedData,
    });

    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination,

    )

    return (
        <div className="bg-white py-3 px-3 rounded">
            <div className="d-flex justify-content-between align-items-center px-3">
                <h3 className="fw-bold">{headline}</h3>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>


            <div className="project-table-container ">
                <table {...getTableProps()} className="project-table">
                    <thead className="rounded-lg">
                        {headerGroups.map((headerGroup, ind) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={ind} >
                                {headerGroup.headers.map((column, i) => (
                                    <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())} className="bg-white  text-center    p-3 ">{column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>


                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row, i)
                            return (
                                (i % 2 == 1) ? <tr {...row.getRowProps()} key={i} className=" p-3  text-center  ">
                                    {row.cells.map((cell, i) => {
                                        return <td key={i} {...cell.getCellProps()} className=" p-3  text-center   ">{cell.render('Cell')}</td>
                                    })}
                                </tr> :
                                    <tr {...row.getRowProps()} key={i} className=" p-3  text-center ">
                                        {row.cells.map((cell, i) => {
                                            return <td key={i} {...cell.getCellProps()} className=" p-3 ash-bg text-center  ">{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-between align-items-center px-3">
                <div>
                    <span className="fw-bold">Show
                        <select className="rounded p-1 mx-1"
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value))
                            }}
                        >
                            {[10, 20, 30, 40, 50, 100].map(pageSize => (
                                <option key={pageSize} value={pageSize} className=" p-2 ">
                                    {pageSize}
                                </option>
                            ))}
                        </select>&nbsp;
                        entries
                    </span>
                </div>


                <div className="pagination p-2 py-3  float-right d-flex justify-content-between align-items-center">

                    <button onClick={() => previousPage()} disabled={!canPreviousPage} className="pagination-btn ">
                        {'Previous'}
                    </button>

                    <span className=' rounded-md px-4 py-3'>
                        Page
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>&nbsp;

                    <button onClick={() => nextPage()} disabled={!canNextPage} className="pagination-btn">
                        {'Next'}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Table;
