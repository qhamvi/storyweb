import React from "react";
import { Link } from "react-router-dom";

export default function Topic({topic}) {
    //console.log(topic.nameTopic[0])
  return (
    <>
      
      <Link className="link" to={`/search/${topic.nameTopic[0]}`}>
        {topic.nameTopic[0]}
      </Link>
         
    </>
  );
}
