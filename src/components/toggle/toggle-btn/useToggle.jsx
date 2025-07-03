import { useState } from "react";

 const useToggle = () => {
    const [isOpenToggle, setIsOpenToggle] = useState(false);
    const togglebtn = () => {
         setIsOpenToggle(!isOpenToggle)
    }

    return {isOpenToggle , togglebtn}

}

export default useToggle;