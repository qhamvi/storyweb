import "./fullstory.css";
import { Link } from "react-router-dom";

export default function FullStory({p}) {
  // console.log(p);
 
  const IMAGE_URL = "http://localhost:5000/Images/";

  return (
    <div className="fullstory">

      <Link to={`/story/${p.id}`}>
        { p.ImageFileName && (
      <img
        className="newstoryImgNew"
        src={IMAGE_URL+p.ImageFileName}
        alt=""
      />
        )}
      </Link>

      <div className="fullstoryInfo">
        <span className="fullstoryTitle">
          {p.titleStory}
        </span>
        <span className="fullstoryStatus">Full</span>
      </div>
      {/* <p className="newstoryDesc">
      Khương Tiểu Mãn năm đó ba tuổi bị trói định một hệ thống, hệ thống nói
      bé thật ra là một thiên kim tiểu thư bị thất lạc, tay cầm kịch bản nữ
      phụ (pháo hôi), thiên kim tiểu thư giả được cha mẹ lắm tiền nhận nuôi
      nhầm mới là nữ chủ. Khương Tiểu Mãn chớp chớp đôi mắt, hỏi: "Nữ phụ pháo
      hôi nghĩa là gì?" Hệ thống: "Các ngươi đều sống ở trong tiểu thuyết, mỗi
      người đều có một vai diễn riêng của mình. Tóm lại ngươi phải tự mình hắc
      hóa, trở thành một đứa bé hư hỏng. Ngươi nhìn bé trai kia như thế nào?
      Vai diễn của hắn so với ngươi còn nặng hơn, về sau là nhân vật phản diện
      lão đại. Ngươi bây giờ đi bắt nạt hắn, cho hắn đẹp mắt." Khương Tiểu Mãn
      ngây thơ mờ mịt, hái một lần đủ loại màu sắc hoa tươi nhét vào tay bé
      trai, "Tôi giúp cậu đẹp mắt!" Hệ thống: "..." Bảo bối ngươi lầm rồi!
      Không phải đẹp mắt kiểu này! Bé trai: "Tôi không cần bằng hữu, cũng
      không cần làm bạn, chỉ là một cải thìa* không ai muốn, đã biết trước sẽ
      bị vứt bỏ." * Cải thìa: vô dụng, thừa thãi
    </p> */}
    </div>
  );
}
