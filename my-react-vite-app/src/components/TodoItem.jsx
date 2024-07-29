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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-between items-center flex-col bg-card w-[350px] h-[200px] mt-2 rounded-lg shadow-lg">
      <div>
        {edit ? (
          <>
            <div className="flex justify-start items-center flex-col w-[250px] h-fit ml-10">
              <TodoInput
                value={localData.title}
                onHouari={(value) => {
                  setData({ desc: localData.desc, title: value });
                }}
                placeholder="Title"
                className="w-[200px] h-[40px]"
              />
              <TodoInput
                value={localData.desc}
                onHouari={(value) =>
                  setData({ desc: value, title: localData.title })
                }
                placeholder="Description"
                className="w-[300px] h-[60px]"
              />
            </div>
            <div className="flex bg-fuchsia-900 justify-end mt-8 items-center flex-row w-[350px] h-max">
              <button
                className="flex justify-center items-center text-white rounded-lg h-[35px] w-[110px] m-3 mt-3 bg-slate-500"
                onClick={() => saveEdit(localData)}
              >
                cancel
              </button>
              <button
                className="flex justify-center items-center text-white rounded-lg h-[35px] w-[110px] mr-3 bg-my-green"
                onClick={() => saveEdit(localData)}
              >
                save
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <label className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                    isChecked ? 'bg-green-500 border-green-500' : 'bg-gray-200 border-gray-400'
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </label>
              <div className="ml-2">
                <h5 className="text-lg text-black font-semibold mb-2">
                  {title}
                </h5>
                <p className="text-sm text-black">{desc}</p>
              </div>
            </div>
          </>
        )}
      </div>
      {!edit && (
        <div className="to-do-btns flex flex-row w-[250px] h-auto justify-between items-center mb-3">
          <button
            onClick={onEditing}
            className="bg-slate-500 flex justify-center items-center text-white rounded-lg h-[35px] w-[110px] mr-3"
          >
            edit to do
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 flex justify-center items-center text-white rounded-lg h-[35px] w-[110px] mr-3"
          >
            delete to do
          </button>
        </div>
      )}
    </div>
  );
}
