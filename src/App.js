import Home from "./Pages/Home/Home";
import TopBar from "./Components/TopBar/TopBar";
import Single from "./Pages/Single/Single";
import Chapter from "./Pages/Chapter/Chapter";
import Search from "./Pages/Search/Search";
import Login from "./Mui_Components/Login";
import SignUp from "./Mui_Components/SignUp";
import React, { useContext } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";--v6 Switch = Routers
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
// import Settings from "./Pages/Settings/Settings";
import { Context } from "./Context/Context";
import Settings from "./Pages/Settings/Settings";
import PageAdmin from "./Pages/Admin/PageAdmin";

function App() {
  // const user = false ;
  const {user} = useContext(Context);
  let admin, collector ;
  if(user != null)
  {
    if(user.idRole == "Admin")
    {
      admin = true ;
    }
    else {
        admin = false ;
      }
    if(user.idRole =="Collector")
    {
      collector = true;
    }
    else {
      collector = false ;
    }
  }
  return (
    <>
      <BrowserRouter>
          <TopBar/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={user ? <Home/> : <Login/>}/>
          <Route path="/signup" element={user ? <Home/> : <SignUp/>}/>
          <Route path="/settings" element={user ? <Settings/>: <Home/>}/> 
          <Route path="/story/:storyId" element={<Single/>}/> 
          <Route path="/chapter/:chapterId" element={<Chapter/>}/> 
          <Route path="/search/:searchName" element={<Search/>}/> 
          <Route path="/admin" element={admin ? <PageAdmin/>: <Home/>}/> 


        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
