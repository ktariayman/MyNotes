import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(e) {
   if(note.content && note.title ){
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  
   }
   e.preventDefault();
  }

  console.log(note);
  return (
    <div>
      <form>
        {isExpanded && (
          <input
            type="text"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
            name="title"
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
            name="content"
            placeholder="Write your note here.."
          ></textarea>
        </p>
        <button onClick={submitButton} type="button" >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
