import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Comment({comment}) {
  const [commentt , setCommentt] = useState({});
  const [user, setUser] = useState({});
  
  useEffect(()=>{
    const getComment = async () => {
      const res = await axios.get("/comments/"+comment);
      //console.log(res.data)
      setCommentt(res.data)
    };
    const getUser = async() => {
      const res = await axios.get("/users/"+commentt.idUser);
      // console.log(res.data)
      setUser(res.data)
    }
    getUser();
    getComment();
  },[commentt.idUser])

  // console.log(user.PhotoFileName)
  const PHOTO_URL = "http://localhost:5000/Photos/";
  //get dd/mm/yyyy
  const dmy = new Date(commentt.dateCom);
  const d= dmy.getDate();
  const m = dmy.getMonth();
  const y = dmy.getFullYear();
  
  return (
    <>
      <span>
        <img
          className="avatar"
          src={PHOTO_URL + user.PhotoFileName}
          alt=""
        />
      </span>
      <div className="user">
        <div className="usertitle">
          <span className="userName">{user.fullName}</span>
          <span className="time">{d}/{m}/{y}</span>
        </div>
        <span className="content">
         {commentt.content}
        </span>
      </div>
    </>
  );
}
