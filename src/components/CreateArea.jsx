import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setText] = useState({
    title: "",
    content: ""
  });

  function functionChange(event) {
    const { name, value } = event.target;
    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={functionChange}
          value={inputText.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={functionChange}
          value={inputText.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.OnADD(inputText);
            setText({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
