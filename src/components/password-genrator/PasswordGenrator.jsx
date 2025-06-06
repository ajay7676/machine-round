import React, { useCallback, useState } from 'react'

const PasswordGenrator = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowd] = useState(false);
    const [char, setCharAllowd] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenrator = useCallback(() => {
        let pass = "";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed) str+="0123456789";
        if(char) str+="!@#$%^&*()_+[]{}|;:,.<>?/~`-="

        for(let i =1 ; i <= numberAllowed.length ; i++){
            let char = Math.floor(Math.random()*str.length+1);
            pass += str.charAt(char)
        }
        setPassword(pass)

    },
      [length , numberAllowed , char],
    )
    

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500' style={{margin: "32px auto"}}> Tes</div>
   
    </>
  )
}

export default PasswordGenrator