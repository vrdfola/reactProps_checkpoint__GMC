import React from "react"
import {Data,MyImage,ActionAlert} from "./Profile/Profile.component";


function App() {
  const myStyle = {textAlign :"center", color : " blue", fontSize : 15, fontWeight :400, backgroundColor: "#282c34"};
  const handleName = e => {
    e. preventDefault();
    alert("Dosunmu Folatomi");
  };
  return (
    <div style = {myStyle} >
      <Data fullName= "Dosunmu Folatomi" bio = " ignorance is bliss " profession = "student"/>
      <MyImage>picture</MyImage>
      <br />
      <ActionAlert handleName = {handleName}></ActionAlert>
    </div>
  );
}

export default App;
