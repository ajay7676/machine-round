import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
   const [count, setcount] = useState(0);
   const [number, setNumber] = useState(0)

  const user ={
     name: "Ajay",
     age: 29,
  }
   const increment = () => {
     setcount(prev => prev+1)
        
   }
  const cubeNumer = ( (num) => {
      return Math.pow(num , 3)
  })

   const result = cubeNumer(number) 
  return (
     <UserContext.Provider value={{user,count , increment , number, setNumber, result}}>
       {children}
     </UserContext.Provider>
  )
}

export default UserContextProvider