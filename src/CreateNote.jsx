import React, { useState } from "react";


const CreateNote = (props) => {

  const [note , setNote] = useState({
    title : "",
    content : "",
  });

  const inputEvent = (event) =>{
   
    const {name , value} = event.target;

    setNote ((prevData) =>{

      return {
        ...prevData,
        [name] : value,
      };
    });

  };

  const addEvent = () =>{
   props.passNote(note);
    setNote({
     title : "",
     content : " "
    });
  };
 
  return (
    <>
    <div className="main_div">
    <div className="input_box">
    <input type = "text" 
     name = "title"
     value = {note.title}
     onChange={inputEvent}
     placeholder="Title"
     autoComplete="off"
     className="title"
    />
   
   <textarea 
   rows = ""
   column= ""
   name = "content"
   value = {note.content}
   onChange={inputEvent}
   placeholder="Write a note ..."
   className="add_title"
   ></textarea>
 
 <button onClick = {addEvent}  className="add_Note">➕
 </button>
 </div>
 </div>
    </>
  )
}

export default CreateNote;