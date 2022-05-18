import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ButtonChapter() {
  const location = useLocation()
  const path = location.pathname.split("/")[2] ;
  const [story , setStory] = React.useState({});
  React.useEffect(()=>{
    const getStory = async () => {
      const res = await axios.get("/stories");
      // console.log(res)
      setStory(res.data)
    };
    getStory()
  },[path])
  
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button><i className="fa-solid fa-angle-left"></i>Trước</Button>
      <Button><i className="icon fa-solid fa-list-ul"><i/></i></Button>
      <Button><i className="fa-solid fa-marker"></i></Button>
      <Button><i className="fa-solid fa-book-open-reader"></i></Button>
      <Button>Sau <i className="fa-solid fa-angle-right"></i></Button>
    </ButtonGroup>
  );
}
