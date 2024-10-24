import React from 'react'
import SidePanel from './SidePanel'

const Body = ({togglePanel}) => {
  return (
    <div className='flex flex-row'>
        <SidePanel togglePanel = {togglePanel}/>
    </div>
  )
}

export default Body