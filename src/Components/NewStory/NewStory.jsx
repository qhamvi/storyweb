import { useState } from "react";
import "./newstory.css";
import { Link } from "react-router-dom";
export default function NewStory({story}) {
  var check = story.complete;
  // console.log(check)
  var full = "Chưa hoàn";
  if(story.complete=='true')
  {
    full = "Full"
  }
  else {
    full = "Chưa hoàn"
  }
  // console.log(story.complete.valueOf())
  // console.log(full)

  const IMAGE_URL = "http://localhost:5000/Images/";
  return (
    <div className="newstory">

      <Link to={`/story/${story.id}`}>
        { story.ImageFileName && (
      <img
        className="newstoryImgNew"
        src={IMAGE_URL+story.ImageFileName}
        alt=""
      />
        )}
      </Link>
      
      <div className="newstoryInfo">
        <span className="newstoryTitle">{story.titleStory}</span>
        <span className="newstoryStatus">Chương {story.numberChap}</span>
      </div>
     
    </div>
  );
}
