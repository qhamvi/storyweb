import { useContext , useEffect, useState} from "react";
import { Context } from "../../Context/Context";
import Comment from "../SmallComponents/Comment";
import "./listcomment.css";
import PostComment from "../SmallComponents/PostComment";

export default function ListComment({story}) {
  // console.log(story.idCom);
  let pathstory = story.id ;
  return (
    <div className="listComment" id="comments">
        <div className="titleChap">
          <i className="iconRange fa-solid fa-comment-dots"></i>
          <span className="title5Chap">NHẬN XÉT CỦA ĐỌC GIẢ</span>
        </div>

        <PostComment pathstory ={pathstory}/>
        <div className="comment">
          <ul className="usercomment">

            {story.idCom?.map((comment) =>
            <li className="user1" key ={comment} >
                <Comment comment={comment}/>
            </li> 
           )}
                        
          </ul>
        </div>
      </div>
  );
}
