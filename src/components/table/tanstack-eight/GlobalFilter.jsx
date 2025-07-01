import React, { useMemo, useState } from 'react'
import {flexRender, useReactTable , getCoreRowModel , getFilteredRowModel} from '@tanstack/react-table'
import { columnsDef ,  } from './columnsDef'
import dataJSON from '../../../data/data.json'


const GlobalFilter = () => {
    const finalData = useMemo(() => dataJSON,[]);
    const finalColumnDef = useMemo(() => columnsDef,[]);
    const [filtering, setFiltering] = useState("")
    const tableInstance = useReactTable({
        columns : finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        // getSortedRowModel : getSortedRowModel(),
        getFilteredRowModel : getFilteredRowModel(),
        state: {
            globalFilter: filtering ,

        }, 
        onGlobalFilterChange: setFiltering,      
    })
  return (
    <div className="w-full my-5">
        <input 
        type='text'
        placeholder='Search ...'
        value={filtering}
        onChange={e => setFiltering(e.target.value)} 
         className='bg-white px-5 py-3 my-5'/>
        <table className='w-full max-w-[1024px] my-0 mx-auto'>
        <thead>
            {
                tableInstance.getHeaderGroups().map((headerElem) => {
                    return <tr key={headerElem.id} className='w-full'>
                        {
                            headerElem.headers.map((columElem) => {
                                return  <th key={columElem.id} colSpan={columElem.colSpan} onClick={columElem.column.getToggleSortingHandler()}
                                className='py-3 px-4 bg-green-800 border-r-1 border-gray-400  text-[#fff]'>
                                {
                                    columElem.isPlaceholder ?
                                     null :
                                     flexRender(
                                        columElem.column.columnDef.header,
                                        columElem.getContext()
                                        )
                                }
                            </th>
                            })
                        }
                    </tr>
                }) 
            }
        </thead>
        <tbody>
            {
                tableInstance.getRowModel().rows.map((rowEle) => {
                    return (
                        <tr key={rowEle.id}>
                            {rowEle.getVisibleCells().map((cellEle) => {
                                return(
                                    <td key={cellEle.id} className='text-[#ddd] text-lg border-1 py-3 px-4 '>
                                        {
                                            flexRender(
                                                cellEle.column.columnDef.cell,
                                                  cellEle.getContext()
                                            )
                                        }
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
  )
}

export default GlobalFilter