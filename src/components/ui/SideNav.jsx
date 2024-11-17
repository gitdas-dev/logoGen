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
    <div className="border shadow-sm h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div>{menuList.map((menu, index) => (
        <h2
        onClick={() => {setActiveIndex(index);
            selectedIndex(index);
        }}
        className={`p-3 px-6 text-lg font-medium text-gray-800 my-2 rounded-md cursor-pointer flex items-center justify-between 
          hover:bg-blue-500 hover:text-white transition-colors duration-300 
          ${activeIndex === index ? 'bg-blue-600 text-white shadow-lg' : ''}`}
        key={index}
        >{menu.name}<menu.icon className="h-5 w-5 ml-3 text-gray-600"/></h2>
      ))}</div>
    </div>
  );
}

export default SideNav;
