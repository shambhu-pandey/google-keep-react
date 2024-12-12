import React from "react";

const Note = (props) => {
  return (
    <div className="note_container">
      <div className="note_title">{props.title}</div>
      <div className="note_content">{props.content}</div>
      
      <button className="delete_btn">
        ❎
      </button>
    </div>
  );
}

export default Note;
