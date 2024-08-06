import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box"> Description</div>
            <div className="descriptionbox-nav-box fade">  Reviews(122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>
            Featuring a sleek, tailored fit that flatters your silhouette, these trousers are designed with a flat front and a subtle, tapered leg for a modern yet classic appearance. The clean lines and minimalistic design make them ideal for both professional and casual settings.
            </p>
            <p></p>
        </div>
    </div>
  )
}

export default DescriptionBox