import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

export default function Story({ story }) {
  //get day
  const dmy = new Date(story.publishDate);
  const d = dmy.getDate();
  const m = dmy.getMonth();
  const y = dmy.getFullYear();
  console.log(story)
  //get image
  const IMAGE_URL = "http://localhost:5000/Images/";
  return (
    <>
      <div className="story-item__left-side d-flex justify-content-between">
      <Link to={`/story/${story.id}`} className="link">
        <img
          className="image-item"
          src={IMAGE_URL + story.ImageFileName} 
          alt=""
        />
        </Link>
        <div>
        <Link to={`/story/${story.id}`} className="link">
        <p className="title-item">{story.titleStory}</p>
        </Link>
          <p>
            <i className="fa-solid fa-user"></i> {story.author}
          </p>
        </div>
      </div>
      <div className="story-item__right-side">
        <p>Chương {story.numberChap}</p>
        <p>
          {d}/{m}/{y}
        </p>
      </div>
    </>
  );
}
