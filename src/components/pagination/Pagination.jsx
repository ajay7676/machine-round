import React from 'react'

const Pagination = ({currentPage , noofpages , gotoPreviousPage,gotoNextPage , handleCurrntPage}) => {
  return (
     <div className="pagination">

          <button disabled={currentPage === 0} className="prev-arrow" onClick={() =>gotoPreviousPage()}>⏮️</button>
          {[...Array(noofpages).keys()].map((k) => (
            <span key={k} className={"pagination-no " + (k === currentPage ? "active" : " ")} onClick={() =>handleCurrntPage(k)}>
              {k}
            </span>
          ))}
          <button disabled={currentPage === noofpages - 1} className="next-arrow" onClick={() =>gotoNextPage()}>⏭️</button>
        </div>
  )
}

export default Pagination