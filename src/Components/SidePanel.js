import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDownload, faGamepad, faNewspaper, faThumbsUp, faMusic, faGear, faEye, faChartLine, faFilm } from '@fortawesome/free-solid-svg-icons';

const SidePanel = ({ togglePanel }) => {

  const [selectItem, setSelectItem]= useState("Home") 
    
  const menuItems = [
    { icon: faHouse, label: "Home" },
    { icon: faMusic, label: "Music" },
    { icon: faThumbsUp, label: "Favorites" },
    { icon: faEye, label: "History" },
    { icon: faDownload, label: "Downloads" },
    { icon: faGear, label: "Settings" },
    { icon: faChartLine, label: "Trending" },
    { icon: faFilm, label: "Movies" },
    { icon: faGamepad, label: "Gaming" },
    { icon: faNewspaper, label: "News" },
  ];

  const handleMenuItems = (item) => {
    setSelectItem(item)
  }

  return (
    <div className={`border-2 border-gray-200 text-center ${togglePanel ? "w-[140px]" : "w-[240px]"} min-h-screen shadow-xl mt-2 transition-all duration-2000 ease-in-out fixed top-24`}>
      <ul className={`py-5 px-1 flex flex-col font-semibold ${togglePanel ? "text-xs" : "text-base"} cursor-pointer gap-2`}>
        {menuItems.map((item, index) => (
          <li key={index} className={`flex items-center ${togglePanel ? "gap-3 px-2" : "gap-5 px-4"} ${selectItem === item.label ? "bg-[#d5d4d4]" : ""} py-2 `} onClick = {() => handleMenuItems(item.label)}>
            <FontAwesomeIcon icon={item.icon} /> {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
