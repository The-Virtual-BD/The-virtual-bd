import React from "react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import { RiSearchLine } from "react-icons/ri";
import './UserDashboard.css';
import Pagination from "./Pagination/Pagination";



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
        <div className="bg-white py-3 px-2 rounded">
            <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center px-2 mb-2">
                <h3 className="fw-bold user-dashboard-font mb-2">{headline}</h3>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>


            <div className="project-table-container ">
                <table {...getTableProps()} className="project-table ">
                    <thead className="rounded-lg">
                        {headerGroups.map((headerGroup, ind) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={ind} >
                                {headerGroup.headers.map((column, i) => (
                                    <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())} className="bg-white  text-start    p-2 ">{column.render('Header')}
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
                                (i % 2 == 1) ? <tr {...row.getRowProps()} key={i} className=" p-2 text-start   ">
                                    {row.cells.map((cell, i) => {
                                        return <td key={i} {...cell.getCellProps()} className=" p-2  text-start    ">{cell.render('Cell')}</td>
                                    })}
                                </tr> :
                                    <tr {...row.getRowProps()} key={i} className=" p-2 text-start  ">
                                        {row.cells.map((cell, i) => {
                                            return <td key={i} {...cell.getCellProps()} className=" p-2 ash-bg text-start   ">{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div >

                <Pagination
                    gotoPage={gotoPage}
                    length={data.length}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />

            </div>

        </div>
    );
}

export default Table;
