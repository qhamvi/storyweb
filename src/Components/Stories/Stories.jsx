import FullStories from "../FullStories/FullStories"
import NewStories from "../NewStories/NewStories"
import "./stories.css"

export default function Stories({stories}) {
    return (
        <div className='stories'>
            
            <NewStories stories={stories}/>
            <FullStories stories={stories}/>
        </div>
    )
}
