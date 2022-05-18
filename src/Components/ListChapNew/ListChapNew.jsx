import "./listchapnew.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Chap from "../SmallComponents/Chap"

export default function ListChapNew({story}) {
  // console.log(story)
  return (
    
    <div className="listChapNew">
      <div className="titleChap">
        <i className="iconRange fa-solid fa-list-ul"></i>
        <span className="title5Chap">5 CHƯƠNG MỚI NHẤT TRUYỆN</span>
        <ul className="chapters">
          {/* Dao nguoc mang */}
          {story.listChap?.slice().sort().map((chapter) =>
          <li className="chap" key ={chapter} >
            <Chap chapter={chapter} story={story}/>
          </li> 
           )}

        </ul>
        
      </div>
    </div>
    
  );
}
