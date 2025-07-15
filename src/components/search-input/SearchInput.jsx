
import { useEffect, useState } from "react";
import "./srch-input.css";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("")
  const [results, setResults] = useState([])
  const [isShowList, setIsShowList] = useState(false)
  const [cacheValues, setCacheValues] = useState({})

  const fetchData = async() => {
   if(cacheValues[searchInput]){
     console.log("Caching value is commig " , + cacheValues)
      setResults(cacheValues[searchInput])
       return ;

   }
  const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchInput}`)
  const result = await response.json();
  setResults(result?.recipes);
  setCacheValues((prevCache => ({...prevCache , [searchInput]: result?.recipes})))


   }
 useEffect(() => {
   const timer = setTimeout(() => {
     fetchData();
   } , 300) 
    return () =>{
         clearTimeout(timer)
    }
 } , [searchInput])
   console.log(cacheValues)
  return (
    <div className="search-input-con text-white">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search ..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setIsShowList(true)}
          onBlur={() => setIsShowList(false)}
         
        />
       
        {
           isShowList && (
              <div className="search-dropmenu">
                    
                       {
                         results.length > 0 && (
                           results.map((recipe) => (
                            <span key={recipe.id}  className="search-item">
                            {recipe.name}
                        </span>
                           ))
                         )
                       }
                       
                </div>
           )
        }
      
       
      </div>
    </div>
  );
};

export default SearchInput;
