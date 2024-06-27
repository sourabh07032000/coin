import React from "react";

function Header() {
  return (
    <div className="h-[12vh] w-[90%] ml-[5%] flex justify-between  items-center">
      <img
        className="h-[12vh] p-3"
        src="https://m.media-amazon.com/images/I/71ujARzqC1L.jpg"
        alt=""
      />
      <i class="fa fa-headphones text-[50px] p-3 " aria-hidden="true"></i>
    </div>
  );
}

export default Header;
