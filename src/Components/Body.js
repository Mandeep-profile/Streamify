import React from 'react'
import SidePanel from './SidePanel'
import VideoContainer from './VideoContainer'

const Body = ({togglePanel}) => {
  return (
    <div className='flex flex-row'>
        <SidePanel togglePanel = {togglePanel}/>
        <VideoContainer togglePanel={togglePanel}/>
        </div>
  )
}

export default Body