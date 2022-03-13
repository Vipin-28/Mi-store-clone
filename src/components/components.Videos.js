import React from 'react'
import VideoCard from './components/VideoCard.js';
import "../sytles/Videos.css";

const Videos = ({videos}) => {
  return (
    <div className="videos">
        {
            videos.map((item, index)=>{
                <VideoCard 
                    index={index} 
                    key={item.image} 
                    image={item.image} 
                    name={item.name}
                />
            })
        }
    </div>
  )
}

export default Videos