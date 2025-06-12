import { useState } from "react"
import { FormValidationContext } from "./FormValidationContext"

export const FormValidationProvider = ({children}) =>{
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({});
    const [touched, setTouched] = useState({});

    // Validation rules
    const validate = (name , value) =>{
        let error = '';
        switch(name){
            case 'email':
                if(!value) error = 'Email is required';
                else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
                     error = 'Invalid email format';
                }
                break;
            case 'password':
                 if (!value) error = 'Password is required';
                else if (value.length < 6) error = 'Password must be at least 6 characters';
                break;
            // Add more validation rules as needed
            default:
                
            break;
        }
          return error;
    }
    const handlChange = (name, value) =>{
        // Validate the field
        const error = validate(name, value);
        setValues(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: error }));

    }
     const handleBlur  = (name) =>{
          setTouched(prev => ({ ...prev, [name]: true }));
     }

    return(
        <FormValidationContext.Provider value={values}>
           {children}
        </ FormValidationContext.Provider>
    )
}