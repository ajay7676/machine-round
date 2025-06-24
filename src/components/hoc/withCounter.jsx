import { useState } from "react";


const withCounter = (OldComponent , incrementBy =1) =>{
   return function EnhancedComponent (props) {
    const [count, setCount] = useState(0);
     return (
      <OldComponent {...props} count= {count} incrementCount={ () => setCount(count+incrementBy) } />
     )
   }
}

export default withCounter;