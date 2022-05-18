import "./settings.css";
import { getByLabelText } from "@testing-library/dom";
import { useContext, useState, useEffect, useRef } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { Context } from "../../Context/Context";
import axios from 'axios';
import { Button } from "react-bootstrap";
import ModalUpdateInforUser from "../../ReactBootstrapComponent/ModalUpdateInforUser";


export default function Settings() {
  const {user} = useContext(Context)
  const [user1, setUser1] = useState({});

  const PHOTO_URL = "http://localhost:5000/Photos/";
  const [error, setError] = useState(false);
  const [file, setFile] = useState(null);
  const imageRef = useRef()
  // const[username, setUserName] = useState('')
  // const[role, setRole] = useState('')
  // const[email, setEmail] = useState('')
  // const [phone,setPhone] = useState('')
  // const [password, setPassword] = useState('')
  // const[fullname, setFullName] = useState('')
  // const [createDate,setCreateDate] = useState('')
  // const [ country, setCountry] = useState('')
  const [modalShow, setModalShow] = useState(false);

  // useEffect(() => {
  //     setUserName(user.username)
  //     setEmail(user.email)
  //     setRole(user.idRole)
  //     setPhone(user.phone)
  //     setPassword(user.password)
  //     setFullName(user.fullName)
  //     setCreateDate(user.createDate)
  //     setCountry(user.country)

  // }, [user])
  useEffect(() => {
    const getUser1 = async () => {
      const res = await axios.get("/users/" + user.id);
      // console.log(res.data)
      setUser1(res.data);
    };
    getUser1();
  }, [user.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImage = {
      PhotoFileName: imageRef.current.value
    };
    if (file) {
        const data = new FormData();
        //   formData.append("file", e.target.files[0], e.target.files[0].name);

        // const filename = Date.now() + file.name;
        const filename =  file.name;
        data.append("name", filename);
        data.append("file", file);
        newImage.PhotoFileName = filename;
        try {
            await axios.post("/users/savefile", data);
        } catch (err) { }
    }
    try {
        const res = await axios.put("/users/"+user.id+"/image", newImage);
        //   window.location.replace("/new/" + res.data.NewId);
        window.location.reload();
    } catch (err) { }


};
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Your Account</span>
        </div>
        <Button onClick={handleSubmit}  className="btnXem" style={{marginRight:"20px"}}> Đổi ảnh </Button>
         <Button  className="btnXem"   onClick={() => setModalShow(true)}>
              Cập nhật thông tin tài khoản
        </Button>
        <form className="settingsForm" >
          <label>Profile Picture</label>
          <div className="settingsPP">
            { file ? (
              <img
              src={URL.createObjectURL(file)} alt="" />
              // src={file} alt="" />
            ) : (
              <>
              <img
              src={PHOTO_URL + user1.PhotoFileName}
              alt=""
            />
            </>
            )}
            
            {/* <img
              src={PHOTO_URL + user1.PhotoFileName}
              alt=""
            /> */}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" 
                    id="fileInput" 
                    ref={imageRef} 
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])} 
            />
            {/* <Button type="submit" variant="primary" style={{backgroundColor:"lightcoral"}}> Đổi ảnh </Button> */}
            
          </div>
          
          <label>Full Name</label>
          
          <input className= 'inputSet' type="text" value={user1.fullName}/>
          <label>Role</label>
          <input className= 'inputSet' type="text" value={user1.idRole}/>
          <label>Email</label>
          <input className= 'inputSet' type="email" value={user1.email}/>
          <label>Phone</label>
          <input className= 'inputSet' type="text" value={user1.phone}/>
          <label>Country</label>
          <input className= 'inputSet' type="text" value={user1.country} />
          <label>Username</label>
          <input className= 'inputSet' type="text" value={user1.username} />

          <label>Password</label>
          <input className= 'inputSet' type="text" value={user1.password}/>
        </form>
      
      <ModalUpdateInforUser 
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
      </div>
      <SideBar />
    </div>
  );
}
