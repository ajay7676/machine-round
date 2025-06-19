import React, { useEffect, useState } from 'react'
import { getPost } from './api/PostApi'
import './crud.css'
import PostCard from './api/PostCard'
import FormSection from './api/FormSection'

const PostCrud = () => {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
  const [updateInutValue, setupdateInutValue] = useState({})
   const getPostData =  async() =>{
     setLoading(true)
      try {
          const  response = await getPost();
          setPosts(response.data)
          setLoading(false)
      } catch (error) {
         console.log(`Post is not fetching ${error.status}`)
          setLoading(false)
      }
      finally{
         setLoading(false)
      }
   }
   useEffect(() => {
      getPostData(); 
   } , [])
   
    console.log(updateInutValue)
  return (
    <>
      <div className="main-section">
       <FormSection posts={posts} setPosts={setPosts} updateInutValue={updateInutValue} setupdateInutValue={setupdateInutValue} />
        <div className="section-post">
          <ol>
            {
               posts && (
                posts.map((post) => (
                  <PostCard key={post.id} post={post} posts={posts} setPosts={setPosts} updateInutValue={updateInutValue} setupdateInutValue={setupdateInutValue}/>
                ))
               )
            }
          </ol>
          {
            loading && (
              <h1 className='text-white w-full text-center'>Post is Fetching ....</h1>
            )
          }
        </div>
      </div>
    </>
  )
}

export default PostCrud