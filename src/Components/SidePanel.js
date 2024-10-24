import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDownload, faGamepad, faNewspaper, faThumbsUp, faMusic, faGear, faEye, faHistory, faChartLine } from '@fortawesome/free-solid-svg-icons';


const SidePanel = ({ togglePanel }) => {
    return (
        <div className={`border-2 border-gray-200 text-center ${togglePanel ? " w-[120px]" : "w-[240px]"} min-h-screen shadow-xl mt-1 transition-width 1s ease fixed top-24`}>
            <ul className={`py-5 px-1 flex gap-0.5 flex-col font-semibold ${togglePanel ? "text-xs" : "text-base"} cursor-pointer`}>
                <li className='flex justify-center items-center gap-4 pt-2 border-1 bg-[#d5d4d4] p-2 rounded-xl'><FontAwesomeIcon icon={faHouse} /> Home</li>
                <li className='flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faHistory} /> History</li>
                <li className='w-120 flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faThumbsUp} />Liked Videos</li>
                <li className='w-120 flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faEye} />Watch History</li>
                <li className='flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faDownload} />Downloads</li>
                <li className='flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faGear} />Settings</li>
                <li className='flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faChartLine} /> Trending</li>
                <li className='flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faMusic} />Music</li>
                <li className='flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faGamepad} />Gaming</li>
                <li className='flex justify-center items-center gap-4 py-2 rounded-xl'><FontAwesomeIcon icon={faNewspaper} /> News</li>
            </ul>
        </div>
    )
}

export default SidePanel