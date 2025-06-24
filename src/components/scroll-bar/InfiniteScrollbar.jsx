import React, { useEffect, useState } from "react";

const InfiniteScrollbar = () => {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const fetchPostData = async () => {
    
    const respose = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=96_page=${page}`
    );
    const data = await respose.json();
     setPosts((prev) => [...prev , ...data])
     setLoading(false)
  };
  useEffect(() => {
   setTimeout(() => {
       fetchPostData();
   }, 2000)
  }, [page]);

   const handleInfinitScroll = async() =>{
     console.log(`scrollHeight ${document.documentElement.scrollHeight}`);
     console.log(`window.innerHeight ${window.innerHeight}`)
     console.log(`document.documentElement.scrollTop ${document.documentElement.scrollTop}`)
   
    try {
        if(window.innerHeight + document.documentElement.scrollTop >=  document.documentElement.scrollHeight) {
          setLoading(false)
          setPage((prev) => prev + 1)
        }
      
    } catch (error) {
       console.log(error)
      
    }

   }

  useEffect(() => {
    window.addEventListener('scroll' , handleInfinitScroll);
     return () => {
       window.removeEventListener('scroll' , handleInfinitScroll)
     }

  } , [])
  return (
    <div className="w-full h-screen m-w-[800px] mx-auto px-10 sm:py-10 md:px-50 md:py-40 " style={{maxWidth: "1024px"  , margin: "0 auto"}}>
      <div className="grid h-full md:grid-cols-3 grid-cols-2 gap-10 ">
        {
           posts && (
            posts.map((post) => (
              <div key={post.id} className="card rounded-lg p-5 shadow-2xl bg-white text-black"  style={{minHeight:"260px"}}>
                  <h2 className="text-2xl">{post.title}</h2>
              </div>
            ))
           )
        }
      </div>
      {
        loading && <h1>Data is Loading...</h1>
      }
    </div>
  );
};

export default InfiniteScrollbar;
