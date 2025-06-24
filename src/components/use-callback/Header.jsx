import React from 'react'

const Header = () => { 
     console.log("Header randering")
  return (
  <h2 className='py-9 text-3xl'>Header Component</h2>
  )
}

export default React.memo(Header)