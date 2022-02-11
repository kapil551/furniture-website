import React, { useEffect } from 'react'

import "./HorizontalCarousel.css";

const HorizontalCarousel = () => {

  return (
    <div className='horizontalCarousel'>

        <div className='slider'>
            <div className='slides' id='carousel'>
                <div className='carousel-div' id='image-1'>
                    <div className='carousel-image'/>
                </div>

                <div className='carousel-div' id='image-2'>
                    <div className='carousel-image' />
                </div>

                <div className='carousel-div'  id='image-3'>
                    <div className='carousel-image'/>
                </div>
            </div>
        </div>

        {/* TODO -> navigation buttons */}
        <div className='carousel-btn-container' id='navigation-container'>
            <div id='btn-1'></div>
            <div className='btn'></div>
            <div className='btn'></div>
        </div>
    </div>
  )
}

export default HorizontalCarousel