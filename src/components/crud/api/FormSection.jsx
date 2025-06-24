import React, { useEffect, useState } from 'react'
import { createPost, updatePost } from './PostApi';

const FormSection = ({posts , setPosts ,updateInutValue ,setupdateInutValue}) => {
    //  console.log(posts)
   const [formData , setFormData] = useState({
      title : "" ,
      body : ""
   })
  const handleChangeInput = (e) => {
      const name = e.target.name;
      const value = e.target.value
      
    setFormData((formData) => ({...formData , [name] : value}) )
  }
    const addPost = async() =>{
         try {
             const res = await createPost(formData);
             if(res.status === 201){
                 setPosts([...posts , res.data] )
                 setFormData({title: "" , body: ""})
             }
         } catch (error) {
             console.log(error)
         }
    }
    useEffect(() => {
            setFormData({
                title: updateInutValue.title || "",
                body: updateInutValue.body || "",
            })
        
    }, [updateInutValue]);

    // Edit Post Functinalites
    const editPost = async(id ,post) =>{
       try {
          const res = await updatePost(id ,post);
            setPosts((prev) => {
                return prev.map((currElem) => {
                    return currElem.id === res.data.id ? res.data : currElem
                });
            })
       } catch (error) {
         console.log(error)
       }
    }
  return (
     <div className="section-form flex  gap-4.5">
        <input type='text' name="title" id="title" value={formData.title} onChange={handleChangeInput} placeholder='Add Title' />
        <input type='text' name="body" id="post" value={formData.body}  onChange={handleChangeInput} placeholder='Add Post' />
       
        {
           (formData.title && formData.body ) !== "" ?  <button onClick={() =>editPost(updateInutValue.id , updateInutValue)} >Edit</button> :  <button onClick={addPost} >ADD</button>
                
        }
    </div>
  )
}

export default FormSection