import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import StreamifyLogo from "../assets/Logo-Streamify.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-lg">
      <div className="w-50 flex items-center">
        <FontAwesomeIcon className="h-6 cursor-pointer" icon={faBars} />
        <img src={StreamifyLogo} alt="Streamify Logo" className="h-8 m-4" />
      </div>
      <div className="w-2/3 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-3/5 border border-gray-900 border-1 px-4 rounded-l-xl outline-none h-10"
        />
        <div className="border border-gray-900 rounded-r-xl flex items-center cursor-pointer h-10 px-4 mr-12 border-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

      <div className="flex justify-end">
        <FontAwesomeIcon className="w-50 h-6 border border-gray-950 p-2 rounded-full cursor-pointer border-2" icon={faUser} />
      </div>
    </div>
  );
};

export default Header;
