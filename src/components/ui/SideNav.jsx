import { Edit, icons, Image, Shield } from "lucide-react";
import React, { useState } from "react";

function SideNav({ selectedIndex }) {

    const [activeIndex, setActiveIndex] = useState(0)
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: Edit,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  return (
    <div className="border shadow-sm h-screen">
      <div>{menuList.map((menu, index) => (
        <h2
        onClick={() => {setActiveIndex(index);
            selectedIndex(index);
        }}
        className={`p-2 px-7 text-lg text-gray-700 my-2 hover:text-whit;e hover:bg-primary cursor-pointer flex items-center justify-between ${activeIndex===index && 'bg-primary text-white' }`}
        key={index}
        >{menu.name}<menu.icon /></h2>
      ))}</div>
    </div>
  );
}

export default SideNav;
