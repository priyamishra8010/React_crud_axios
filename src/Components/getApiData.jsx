import axios from "axios"
import { useEffect, useState } from "react"
import { PostApiData } from "./postApiData";


export const GetAPIData=()=>{
  const [data , setData]= useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then ((response)=>{
            console.log(response);
             setData(response.data)
        })
    }, [])

    // delete button
    const handleDelete=(id)=>{
        return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then ((response)=>{
            console.log("deleted",response)
            const newUpdatedData= data.filter((currPost)=>{
                return currPost.id !== id;
            })
            setData(newUpdatedData)
        })
    }

    // +++++ update data ++++++++++++

    const handleUpdatedData=()=>{
        return axios.put("https://jsonplaceholder.typicode.com/posts")
        .then ((res)=>{
            console.log(res)
        })

    }



 return(
    
    <>
    <section className="post-from">
        <PostApiData data={data} setData={setData}/>  
    </section>
     <section className="section-post">
            <ol>
                {
                    data.map((currEle)=>{
                        const {id , title,body} =currEle
                        return (
                            <li key={id}>
                                <p> Title : {title}</p>
                                <p> Body : {body}</p>
                                <button className="edit-btn" onClick={handleUpdatedData}>Edit</button>
                                <button className="delete-btn" onClick={()=>handleDelete(id)}>Delete</button>
                                 
                            </li>
                        )
                    })
                }
            </ol>
        </section>
    </>
 )
}