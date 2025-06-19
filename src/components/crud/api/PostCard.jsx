import React, { useState } from 'react'
import { deletePost } from './PostApi';

const PostCard = ({post ,posts ,setPosts ,updateInutValue,setupdateInutValue}) => {
     const{id, title ,body} = post;

     const deletePostCard = async(id) => {
         try {
             const res = await deletePost(id);
              if(res.status === 200){
                 const reamingPost = posts.filter((post) => post.id !== id)
                 setPosts(reamingPost)
                }else{
                    console.log(`Faild to delete this post:` , res.status)
                }
         } catch (error) {
             console.log(`Post was not delete ${error.status}`)
         }

     }
      const updateData = (post) => {
        console.log("Edit btn clickkk")
        setupdateInutValue(post)
      }
  return (
    <>
        <li> 
            <p className='py-3 text-sm'>No. {id}</p>
            <p className='py-3 text-sm'>Title :{title}</p>
            <p className='py-3 text-sm'>News : {body}</p>
            <div className="flex justify-start gap-3">
                <button className='bg-green-300 text-black text-sm p-2' onClick={() => updateData(post)}>Edit</button>
                <button className=' text-sm p-2 btn-delete' onClick={() => deletePostCard(id)}>Delete</button>
            </div>
        </li>
    </>
  )
}

export default PostCard