import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import Headering from "./components/header";
import Footer from "./components/footer";

export default function TodoWrapper() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState([]);
  const [indexEdit, setIsEditedIndex] = useState(-1);
  const handleEditing = (index) => {
    setIsEditedIndex(index);
  };

  const handleClick = () => {
    if (title !== "" && desc !== "") {
      setItems([...items, { title, desc }]);
      setDesc("");
      setTitle("");
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  const handleEditCard = (localData) => {
    const updatedItems = [...items];
    updatedItems[indexEdit] = localData;
    setItems(updatedItems);
    setIsEditedIndex(-1);
    // 3- edit with new data
    /// save state
  };

  return (
    <div className="header-container-to-do w-full min-h-[400px]">
      <div>
        <Headering />
      </div>
      <div className="flex justify-center items-center flex-col bg-prp h-auto w-auto shadow-md">
        <TodoInput value={title} onHouari={setTitle} placeholder="Title" />
        <TodoInput value={desc} onHouari={setDesc} placeholder="Description" />
        <button
          onClick={handleClick}
          className="bg-my-green py-2 text-white px-8 rounded-sm mt-5 mb-5"
        >
          Add
        </button>
      </div>

      <div className="content-container-card w-full min-h-[400px]">
        <ul className=" ml-7 grid sm:grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <li key={index} className="col-span-1">
              <TodoItem
                edit={indexEdit === index ? true : false}
                title={item.title}
                desc={item.desc}
                onDelete={() => handleDelete(index)}
                onEditing={() => handleEditing(index)}
                saveEdit={handleEditCard}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
