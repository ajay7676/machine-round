import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Pagination = ({nopages,currentPage, gotoPreviousPage,gotoNextPage , handleCurrntPage}) => {
     console.log(nopages)
  return (
    <div className='pagination my-5 w-full max-w-[70%] mx-auto'>
       <button disabled={currentPage === 0} className="text-gray-500" onClick={() => gotoPreviousPage()}> <FaChevronLeft /></button>
        <ul className='flex gap-4 items-center justify-center '>
           {
          
             [...Array(nopages).keys()].map((k) => (
            <li key={k}className={` py-3 px-3  cursor-pointer ${currentPage == k ? "bg-white" : "bg-gray-600"}`} onClick={() => handleCurrntPage(k)}>{k+1}</li>
          ))
           }
        </ul>
       <button disabled={currentPage === nopages - 1} className='text-gray-500' onClick={gotoNextPage}> <FaChevronRight /></button>
    </div>
  )
}

export default Pagination