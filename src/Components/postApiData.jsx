import axios from "axios"
import { useState } from "react"


export const PostApiData=({data , setData})=>{
    const [newData , setNewData] = useState({
        title: "",
        body: "",
    })

    // for post data on UI
    //  const [postData , setPostData] = useState([]);

const handleInputData=(e)=>{
  setNewData({
    ...newData,
    [e.target.name]: e.target.value
  })
   
}

    const handleSubmit=(e)=>{
        // alert(JSON.stringify(newData))
        e.preventDefault();
        return axios.post("https://jsonplaceholder.typicode.com/posts" , newData )
        .then ((response)=>{
            // alert()
            console.log("post",response)
            // setNewData(response.data)
            if(response.status === 201){
                setData([...data ,response.data])
                setNewData({title: "" , body:""})
            }
                             
        })
    }

    
    return(
        <>
        <form onClick={handleSubmit}>
        <div>
                <label htmlFor="title"></label>
                <input
                type="text"
                name="title"
                placeholder="Add Text"
                autoComplete="off"
                value={newData.title}
                onChange={handleInputData}
                />
            </div>

            <div>
                <label htmlFor="body"></label>
                <input
                type="text"
                name="body"
                placeholder="Add Post"
                autoComplete="off"
                value={newData.body}
                onChange={handleInputData}
                />
            </div>
            <button onClick={handleSubmit}
             className="addbtn" >Add</button>

        </form>
        </>
    )

}