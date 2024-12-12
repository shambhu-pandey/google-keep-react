import React, { useState } from "react";
import "./index.css"
import Header from "./Header"
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
   
  const [addItem , setAddItem] = useState([]);

  const addNote = (note) => {
    alert("i am clicked");

    setAddItem((...preData) =>{
      return [...preData , note];
    });
    console.log(note);
  }
  return (
    <>
    <Header />
    <CreateNote passNote = {addNote} />
    
    {addItem.map((val , index) =>{
      return (
        <Note 
        keys = {index}
        id = {index}
        title = {val.title}
        content = {val.content}
        />
      )
    })}
    <Footer />
    </>
  )
}

export default App;