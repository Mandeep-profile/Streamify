import React from 'react'

const VideoCard = ({ card }) => {
    if (!card || !card.snippet || !card.statistics) {
        return <div>Loading...</div>; 
    }
    console.log(card);
    const { snippet, statistics } = card
    const { channelTitle, thumbnails, title } = snippet

    return (
        <div className='w-1/4 py-5 text-left'>
            <img src={thumbnails.medium.url} alt="Video_thumbnail" className='rounded-xl w-72'/>
            <h2 className='font-bold w-72'>{title}</h2>
            <p>{channelTitle}</p>
            <p>{statistics.viewCount} Views</p>
        </div>
    )
}

export default VideoCard