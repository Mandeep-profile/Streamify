import React from 'react'

const VideoCard = ({ card, togglePanel }) => {
    if (!card || !card.snippet || !card.statistics) {
        return <div>Loading...</div>; 
    }
    const { snippet, statistics } = card
    const { channelTitle, thumbnails, title } = snippet

    return (
        <div className={`${togglePanel ? "w-[310px] ml-5" : "w-1/3" } py-5 text-left flex flex-col`}>
            <img src={thumbnails.medium.url} alt="Video_thumbnail" className={`${togglePanel ? "w-[310px]" : "w-96"} py-2 rounded-lg`}/>
            <h2 className={`font-bold ${togglePanel ? "w-[310px]" :"w-96"}`}>{title}</h2>
            <p>{channelTitle}</p>
            <p>{statistics.viewCount} Views</p>
        </div>
    )
}

export default VideoCard