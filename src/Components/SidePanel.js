import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDownload, faGamepad, faNewspaper, faThumbsUp, faMusic, faGear, faEye, faHistory, faChartLine } from '@fortawesome/free-solid-svg-icons';

const SidePanel = ({ togglePanel }) => {
    
  const menuItems = [
    { icon: faHouse, label: "Home" },
    { icon: faHistory, label: "History" },
    { icon: faThumbsUp, label: "Favorites" },
    { icon: faEye, label: "History" },
    { icon: faDownload, label: "Downloads" },
    { icon: faGear, label: "Settings" },
    { icon: faChartLine, label: "Trending" },
    { icon: faMusic, label: "Music" },
    { icon: faGamepad, label: "Gaming" },
    { icon: faNewspaper, label: "News" },
  ];

  return (
    <div className={`border-2 border-gray-200 text-center ${togglePanel ? "w-[140px]" : "w-[240px]"} min-h-screen shadow-xl mt-1 transition-all duration-500 ease-in-out fixed top-24`}>
      <ul className={`py-5 px-1 flex flex-col font-semibold ${togglePanel ? "text-xs" : "text-base"} cursor-pointer gap-2`}>
        {menuItems.map((item, index) => (
          <li key={index} className={`flex items-center ${togglePanel ? "gap-1 px-2" : "gap-5 px-4"} bg-[#d5d4d4] py-2 `}>
            <FontAwesomeIcon icon={item.icon} /> {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
