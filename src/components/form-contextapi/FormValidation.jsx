import React, { useContext } from 'react'
import { FormValidationContext } from './context/FormValidationContext'

const FormValidation = () => {
    const context = useContext(FormValidationContext);

     console.log(context)

    const values = {
        email: "ajay@gmail.com" ,
        password : "123456"


    }

    const handleSubmit =  () =>{

    }
    const handleChange = () => {

    }
     const handleBlur = ()  => {
      
     }
  return (
    <>
     <form onSubmit={handleSubmit} className='w-full max-w-[90%] mx-auto'>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
           className='block bg-white p-3 w-full h-12 border-gray-300 border-1 rounded-sm'
        />
        {/* {touched.email && errors.email && (
          <div className="error">{errors.email}</div>
        )} */}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password || ''}
          onChange={(e) => handleChange('password', e.target.value)}
          onBlur={() => handleBlur('password')}
          className='p-3'
        />
        {/* {touched.password && errors.password && (
          <div className="error">{errors.password}</div>
        )} */}
      </div>

     <div className="flex items-center py-2 justify-center my-5">
          <button className='p-5 py-2 bg-green-400 rounded' type="submit">Submit</button>
     </div>
    </form>
    </>
  )
}

export default FormValidation