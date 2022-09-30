import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Items, setItems] = useState([]);

  function AddItem(notes) {
    return setItems((preValue) => [...preValue, notes]);
  }

  function DeleteItem(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea OnADD={AddItem} />
      {Items.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={DeleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
