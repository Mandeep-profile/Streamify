import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDownload, faGamepad, faNewspaper, faThumbsUp, faMusic, faGear, faEye, faHistory, faChartLine } from '@fortawesome/free-solid-svg-icons';


const SidePanel = ({ togglePanel }) => {
    return (
        <div className={`border-2 border-gray-200 text-center ${togglePanel ? " w-[130px]" : "w-[240px]"} min-h-screen shadow-xl mt-1 transition-width 1s ease fixed top-24`}>
            <ul className={`py-5 px-1 flex gap-2 flex-col font-semibold ${togglePanel ? "text-xs" : "text-base"} cursor-pointer`}>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs px-2" : "gap-5 text-sm px-4"} pt-2 border-1 bg-[#d5d4d4] py-2`}><FontAwesomeIcon icon={faHouse} /> Home</li>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs  px-2" : "gap-5 text-sm  px-4"} pt-2 border-1 bg-[#d5d4d4] py-2 `}><FontAwesomeIcon icon={faHistory} /> History</li>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs px-2" : "gap-5 text-sm px-4"} pt-2 border-1 bg-[#d5d4d4] py-2`}><FontAwesomeIcon icon={faThumbsUp} />Liked Videos</li>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs px-2" : "gap-5 text-sm px-4"} pt-2 border-1 bg-[#d5d4d4] py-2 `}><FontAwesomeIcon icon={faEye} />Watch History</li>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs px-2" : "gap-5 text-sm px-4"} pt-2 border-1 bg-[#d5d4d4] py-2`}><FontAwesomeIcon icon={faDownload} />Downloads</li>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs  px-2" : "gap-5 text-sm  px-4"} pt-2 border-1 bg-[#d5d4d4] py-2 `}><FontAwesomeIcon icon={faGear} />Settings</li>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs px-2" : "gap-5 text-sm px-4"} pt-2 border-1 bg-[#d5d4d4] py-2 `}><FontAwesomeIcon icon={faChartLine} /> Trending</li>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs px-2" : "gap-5 text-sm px-4"} pt-2 border-1 bg-[#d5d4d4] py-2  `}><FontAwesomeIcon icon={faMusic} />Music</li>
                <li className={`flex items-center ${togglePanel ?"gap-2 text-xs px-2" : "gap-5 text-sm px-4"} pt-2 border-1 bg-[#d5d4d4] py-2  `}><FontAwesomeIcon icon={faGamepad} />Gaming</li>
                <li className={`flex items-center ${togglePanel ? "gap-2 text-xs px-2" : "gap-5 text-sm px-4"} pt-2 border-1 bg-[#d5d4d4] py-2  `}><FontAwesomeIcon icon={faNewspaper} /> News</li>
            </ul>
        </div>
    )
}

export default SidePanel