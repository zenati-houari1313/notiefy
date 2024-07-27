import React, { useState } from "react";
import TodoInput from "./TodoInput";

export default function TodoItem({
  title,
  desc,
  onDelete,
  onEditing,
  edit,
  saveEdit,
}) {
  const [localData, setData] = useState({ title, desc });
  return (
    <div className="flex justify-between items-center  flex-col bg-card w-[250px] h-[250PX] mt-2 rounded-lg shadow-lg">
      <div>
        {edit ? (
          <>
            <div className="w-48 bg-red ml-10">
              <TodoInput
                value={localData.title}
                onHouari={(value) => {
                  setData({ desc: localData.desc, title: value });
                }}
                placeholder="Title"
              />
              <TodoInput
                value={localData.desc}
                onHouari={(value) =>
                  setData({ desc: value, title: localData.title })
                }
                placeholder="Description"
              />
            </div>
            <div className="flex  justify-evenly items-center flex-row w-[250px]">
              <button
                className=" flex justify-center items-center rounded-sm h-[40px] w-[70px]  mt-3 bg-yellow-400"
                onClick={() => saveEdit(localData)}
              >
                {" "}
                save{" "}
              </button>
              <button
                className=" flex justify-center items-center rounded-sm h-[40px] w-[70px] mt-3 bg-slate-500  "
                onClick={() => saveEdit(localData)}
              >
                {" "}
                cancel{" "}
              </button>
            </div>
          </>
        ) : (
          <>
            <h5 className="text-lg   text-text font-semibold mb-2 ml-2">
              {title}
            </h5>
            <p className="text-sm text-text ml-2">{desc}</p>
          </>
        )}
      </div>
      {!edit && (
        <div className="to-do-btns flex flex-row w-[250px] h-auto justify-between items-center mb-3">
          <button
            onClick={onDelete}
            className="bg-red-500 px-4  h-[40px] w-[70px] rounded-sm ml-8 mr-8 "
          >
            Delete
          </button>
          <button
            onClick={onEditing}
            className="bg-red-500 px-4  h-[40px] w-[70px] rounded-sm ml-8 mr-8 "
          >
            edit
          </button>
        </div>
      )}
    </div>
  );
}
