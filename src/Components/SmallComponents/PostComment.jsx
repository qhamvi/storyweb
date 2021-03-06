import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../../Context/Context";

export default function PostComment({ pathstory }) {
  const { user } = useContext(Context);

  const [error, setError] = useState(false);
  const [content2, setContent] = useState("");

  const [commentt, setComment] = useState("");
 
  const location = useLocation()
  const path = location.pathname.split("/")[2] ;
  const [story , setStory] = useState({});
  useEffect(()=>{
    const getStory = async () => {
      const res = await axios.get("/stories/"+path);
      // console.log(res.data)
      setStory(res.data)
    };
    getStory()
  },[path])


  const vivi = async (e) => {
    e.preventDefault();
    const res = await axios.post("/comments", {
      idUser: user.id,
      idStory: pathstory,
      content: content2,
    });
    // if (postcomt != undefined) {
    //   const res2 = await axios.put("/stories/" + pathstory + "/comment", {
    //     idCom: postcomt,
    //   });
      // console.log(res.data);
      setComment(res.data);

    // }
  };
  let result ;
  result = story.idCom;
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
     
      result.push(commentt.id)
      const res = await axios.put("/stories/" + pathstory + "/comment", {
            // idComt: result,
            idCom : result,
          });
      // && await axios.put("/stories/"+pathstory+"/comment", {
      //     idCom : "commentt.id",
      // })
      window.location.reload();
     
    } catch (err) {
      setError(true);
    }
  };
  // console.log(commentt);
  // console.log(commentt.id);

  return (
    <>
      <form className="comment-form" method="post" onSubmit={handleSubmit} >
        <input type="hidden" className="storyID" id="stroryId" value={31785} />
        <input type="hidden" className="replyTo" value="0"></input>
        { user ? (
            <>
            <textarea
          aria-label="B??nh lu???n"
          id="comment-message"
          className="message"
          
          placeholder="N???i dung b??nh lu???n t???i thi???u 15 k?? t???, t???i ??a 500 k?? t???!"
          onChange={(e) => setContent(e.target.value)}
          onBlur={vivi}
        >
        </textarea>
        <p id="comment-char-count">
          S??? k?? t???: <span>{content2.length}</span>
        </p>
        <div className="text-right">
          <button type="submit" onClick={handleSubmit}>
            <i className="iconRange fa-solid fa-paper-plane"></i> G???i
          </button>
        </div>
            </>
        ) : (
          <>
          <textarea
          aria-label="B??nh lu???n"
          id="comment-message"
          className="message"
          placeholder="B???n ph???i ????ng nh???p ????? b??nh lu???n"
          onChange={(e) => setContent(e.target.value)}
        >
        </textarea>
        <p id="comment-char-count">
          S??? k?? t???: <span>{content2.length}</span>
        </p>
          </>
        )}
        
      </form>
    </>
  );
}
