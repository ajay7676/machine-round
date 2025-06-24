import React from 'react'
import {flexRender, useReactTable} from '@tanstack/react-table'
import { columnsDef } from './columnsDef'
import dataJson from '../../../data/data.json'


const TanstackTable = () => {
    const tableInstance = useReactTable({
        columns : columnsDef,
        data: dataJson

    })
  return (
    <div className="w-full my-5">
        <table className='w-full max-w-[1024px] my-0 mx-auto'>
        <thead>
            {
                tableInstance.getHeaderGroups().map((headerElem) => {
                    return <tr key={headerElem.id} className='w-full'>
                        {
                            headerElem.headers.map((columElem) => {
                                return  <th key={columElem.id} className='py-3 px-4 bg-green-800 border-r-1 border-gray-400  text-[#fff]'>
                                {flexRender(
                                columElem.column.columnDef.header,
                                columElem.getContext()
                                )}
                            </th>
                            })
                        }
                    </tr>
                }) 
            }
        </thead>
    </table>
    </div>
  )
}

export default TanstackTable