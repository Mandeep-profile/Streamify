import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import StreamifyLogo from "../assets/StreamifyLogo.png";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = ({ togglePanel, setTogglePanel }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    let timer = setTimeout(() => getSuggestions(), 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSuggestions = async () => {
    try {
      console.log(searchData);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const response = await data.json();
      setSearchData(response[1])
    } catch (error) {
      console.log("No Data Found ", error);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col items-center shadow-lg select-none fixed top-0 bg-white z-50">
        <div className="w-full flex justify-between items-center px-10">
          <div className="w-50 flex items-center">
            <FontAwesomeIcon
              className="h-6 cursor-pointer transition: background-color 0.5s easein"
              icon={faBars}
              onClick={() => setTogglePanel(!togglePanel)}
            />
            <img src={StreamifyLogo} alt="Streamify Logo" className="h-[100px]" />
          </div>
          <div className="w-2/3 flex flex-col items-center relative">
            <div className="w-full flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-3/5 border border-gray-400 border-1 px-4 rounded-l-xl outline-none h-10 placeholder:text-black placeholder:font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="border border-gray-400 border-1 rounded-r-xl flex items-center cursor-pointer h-10 px-4 mr-12">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <FontAwesomeIcon
              className="w-50 h-6 border border-gray-900 border-1 p-2 rounded-full cursor-pointer text-gray-400"
              icon={faUser}
            />
          </div>
        </div>
      </div>
     {searchQuery.length > 0 && <ul className="absolute top-20 right-[32.75rem] w-[39.25rem] bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
        {searchData?.map((query, index) => {
          return <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200">{query}</li>
        })}
      </ul>}
    </>
  );
};

export default Header;
