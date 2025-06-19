import { useEffect, useState } from "react";

import "./srch-input.css";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [showList, setshowList] = useState(false);
  const [cache, setCache] = useState({})
  const fetchData = async () => {
    if(cache[inputValue]){
        setResults(cache[inputValue]);
        return;
    }
  const data = await fetch("https://dummyjson.com/recipes/search?q="+inputValue);
    const response = await data.json();
    setResults(response.recipes);
    setCache((prev) => [{...prev, [inputValue]: response?.recipes}])
  };
 
  useEffect(() => {
    const timer = setTimeout(() => {
            fetchData();
    } , 300);

    return () => {
        clearTimeout(timer)
    }
  }, [inputValue]);
  return (
    <div className="search-input-con">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setshowList(true)}
          onBlur={() => setshowList(false)}
        />
        {
            showList && (
                 <div className="search-dropmenu">
                    {results &&
                        results.map((r) => (
                        <span key={r.id} className="search-item">
                            {r.name}
                        </span>
                        ))}
                </div>
            )
        }
       
      </div>
    </div>
  );
};

export default SearchInput;
