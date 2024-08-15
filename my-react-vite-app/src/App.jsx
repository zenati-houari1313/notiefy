import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import Headering from "./components/header";
import Footer from "./components/footer";

export default function TodoWrapper() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) ?? []
  );
  const [indexEdit, setIsEditedIndex] = useState(-1);
  const [showInputFields, setShowInputFields] = useState(false);

  const handleEditing = (index) => {
    setIsEditedIndex(index);
  };

  const handleClick = () => {
    if (title !== "" && desc !== "") {
      const newItems = [...items, { title, desc }];
      setItems(newItems);
      localStorage.setItem("items", JSON.stringify(newItems));
      setDesc("");
      setTitle("");
      setShowInputFields(false);
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleEditCard = (localData) => {
    const updatedItems = [...items];
    updatedItems[indexEdit] = localData;
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setIsEditedIndex(-1);
  };

  return (
    <div className="header-container-to-do w-full min-h-[400px]">
      <Headering />

      <div className="flex justify-evenly flex-row  items-start mt-7 ml-3">
        <div
          onClick={() => setShowInputFields(!showInputFields)}
          className="w-[320px] h-[180px] bg-gray-200 rounded-lg border-2 cursor-pointer hover:bg-blue-600"
        >
          <div className="flex flex-col justify-center items-center  h-full">
            <span className="text-6xl text-gray-600">+</span>
            <span className="text-xl text-gray-600">Add new to do</span>
          </div>
        </div>
        {showInputFields && (
          <div className="mt-5 w-[320px] bg-gray-100  p-4 rounded-lg border-2 border-black">
            <TodoInput value={title} onHouari={setTitle} placeholder="Title" />
            <TodoInput value={desc} onHouari={setDesc} placeholder="Description" />
            <button
              onClick={handleClick}
              className="bg-my-green py-2 text-white px-8 rounded-sm mt-5"
            >
              Add
            </button>
            <button
              onClick={() => setShowInputFields(false)}
              className="bg-red-500 py-2 text-white px-8 rounded-sm"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="content-container-card w-full min-h-[400px]">
        <ul className="ml-7 grid sm:grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <li key={index} className="col-span-1">
              <TodoItem
                edit={indexEdit === index}
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

      <Footer />
    </div>
  );
}
