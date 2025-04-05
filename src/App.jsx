// import { Post } from "./Components/Post"
import "./App.css"
import { GetAPIData } from "./Components/getApiData"

export const App=()=>{
  return(
    <section className="main-section"> 
      {/* <Post/> */}
      <GetAPIData/>

    </section>
  )
}