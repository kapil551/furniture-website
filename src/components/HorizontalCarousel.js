import React from 'react'

import "./HorizontalCarousel.css";

const HorizontalCarousel = () => {
  return (
    <div className='horizontalCarousel'>

        <div className='slider'>
            <div className='slides' id='carousel'>
                <div className='carousel-div'>
                    <div className='carousel-image'/>
                </div>

                <div className='carousel-div'>
                    <div className='carousel-image'/>
                </div>

                <div className='carousel-div'>
                    <div className='carousel-image'/>
                </div>
            </div>
        </div>

        {/* TODO -> navigation buttons */}
        <div className='carousel-btn-container'>
            <div id='btn-1'></div>
            <div className='btn'></div>
            <div className='btn'></div>
        </div>
    </div>
  )
}

export default HorizontalCarousel