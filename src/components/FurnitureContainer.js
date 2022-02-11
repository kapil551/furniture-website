import React from 'react'

import "./FurnitureContainer.css";

import furnitures from '../data/furnitures';

const FurnitureContainer = () => {

    // console.log(furnitures);
  return (
    <div className='furnitureContainer'>
        <h1 className='title'> Popular </h1>
        <div className='furniture-items'>

            {
                furnitures?.map((furniture, index) => {

                    return (
                        <div className='furniture-div' key={index}>
                            <div className='furniture-image' id={`${furniture.id}`}/>
                            <div className='furniture-description'>
                                <h5 className='furniture-title'>{furniture.title}</h5>
                                <h5 className='furniture-price'>{furniture.price}</h5>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    </div>


  )
}

export default FurnitureContainer