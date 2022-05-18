import { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Context } from "../Context/Context";
import axios from 'axios';

export default function ModalUpdateInforUser(props) {
  const {user} = useContext(Context)
  const [user1, setUser1] = useState({});
  useEffect(() => {
    const getUser1 = async () => {
      const res = await axios.get("/users/" + user.id);
      // console.log(res.data)
      setUser1(res.data);
    };
    getUser1();
  }, [user.id]);

  const fullnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const countryRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put("/users/"+ user1.id, {
      fullName: fullnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      PhotoFileName: "gau2.jpg",
      country: countryRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value
    });
  }
  console.log(user)

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cập nhật thông tin người dùng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                placeholder={user1.fullName}
                ref={fullnameRef}
                autoFocus
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={user1.email}
                ref={emailRef}
                autoFocus
              />
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder={user1.phone}
                ref={phoneRef}
                autoFocus
              />
              <Form.Label>Quê quán</Form.Label>
              <Form.Control
                type="text"
                placeholder={user1.country}
                ref={countryRef}
                autoFocus
              />
              <Form.Label>Tên tài khoản</Form.Label>
              <Form.Control
                type="text"
                placeholder={user1.username}
                ref={usernameRef}
                autoFocus
              />
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder={user1.password}
                ref={passwordRef}
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  