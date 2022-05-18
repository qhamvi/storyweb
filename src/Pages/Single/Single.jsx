import SideBar from "../../Components/SideBar/SideBar"
import SingleStory from "../../Components/SingleStory/SingleStory"
import "./single.css"

export default function Single() {
  return (
    <div className='single'>
        <SingleStory/>
        <SideBar/>
    </div>
  )
}
