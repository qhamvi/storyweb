import './search.css'
import SearchPage from '../../Components/SearchPage/SearchPage'
import SideBar from '../../Components/SideBar/SideBar'
import SingleStory from '../../Components/SingleStory/SingleStory'

export default function Search() {
  return (
    <div className='search'>
        <SearchPage/>
        <SideBar/>
    </div>
  )
}
