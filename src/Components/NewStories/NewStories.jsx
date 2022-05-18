import NewStory from "../NewStory/NewStory"
import "./newstories.css"

export default function NewStories({stories}) {
    return (
        <div className="News">
            <div className="storiesTitle">
                <span className="titleStories">Truyện mới cập nhật</span>
                <i className="iconNext fa-solid fa-angle-right"></i>
            </div>
            <div className="frameNews">
                <div className='newstories'>
                    {stories.map( (p) => (
                        <NewStory story ={p}/>
                    ))}
                </div>
                <div className="newstoriesSeen">
                    {/* <button className="buttonSeen" role="button">Xem thêm</button> */}
                    <button className="buttonSeen">Xem thêm</button>
                </div>
            </div>

        </div>

    )
}
