import BasicPagination from "../../Mui_Components/BasicPagination";
import Chap from "../SmallComponents/Chap";
import "./listchapfull.css";

export default function listChapFull({story}) {
  return (
    <div className="listChapFull">
      <div className="titleChap">
        <i className="iconRange fa-solid fa-list-ul"></i>
        <span className="title5Chap">DANH SÁCH CHƯƠNG TRUYỆN</span>
      </div>
      <ul className="chapters">
          {/* Mang khong dao nguoc */}
          {story.listChap?.map((chapter) =>
          <li className="chap" key ={chapter} >
            <Chap chapter={chapter} story={story}/>
          </li> 
           )}
        </ul>
     
      <div className="numberPage">
        <BasicPagination story={story}/>
      </div>
    </div>
  );
}
