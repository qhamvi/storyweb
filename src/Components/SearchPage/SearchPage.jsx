import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Story from "../SmallComponents/Story";
import "./searchpage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function SearchPage() {
  const [topicsStories, setTopicsStories] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [topicFull, settopicFull] = useState([]);


  useEffect(() => {
    const fetchTopics = async () => {
      const res = await axios.get("/stories/topic/" + path);
      console.log(res.data);
      setTopicsStories(res.data);
    };
    

    fetchTopics();
  }, [path]);

  console.log(topicsStories?.length);
  let num = 0;
  if (topicsStories?.length <= 30) {
    num = 0;
  } else {
    num = topicsStories?.length / 30;
  }

  return (
    <div className="searchpage">
      <div className="singlePage">
        <span className="titlePage">Trang chủ</span>
        <i className="iconNext fa-solid fa-angle-right"></i>
        <span className="titleStory">
          {/* Ma hoa  */}
          Tìm truyện theo : {decodeURIComponent(path)}
        </span>
      </div>
      <div className="list-stories">
        <ul className="unstyled">
          {topicsStories?.map((story) => (
            <li
              className="story-item d-flex justify-content-between"
              key={story}
            >
              <Story story={story} />
            </li>
          ))}
        </ul>
      </div>
      <div className="numberPage">
        <Stack spacing={num}>
          <Pagination count={num} color="secondary" />
        </Stack>
      </div>
    </div>
  );
}
