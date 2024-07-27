import React from "react";
const currentYear = new Date().getFullYear()
function Footer() {
  return (
    <div className="footer flex justify-center items-center text-base font-bold  bottom-0  h-24 w-full text-copy ">
      <h2>copyright @ {currentYear}</h2>
    </div>
  );
}

export default Footer;