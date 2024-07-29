import React from 'react';


export default function TodoInput({ value, onHouari, placeholder, className }) {
  const handleChangeValue = (e) => {
    onHouari(e.target.value);
  };

  return (
    <div className="flex flex-col bg-black mt-5">
      <input
        value={value}
        onChange={handleChangeValue}
        className={`w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border-gray-300 ${className}`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
