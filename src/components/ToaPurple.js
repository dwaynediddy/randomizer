import { useState, useEffect, useMemo } from 'react'

// toa images
import fang from '../assets/fang.png'
import lightbearer from '../assets/lightbearer.png'
import mask from '../assets/mask.png'
import mbody from '../assets/mbody.png'
import mchaps from '../assets/mchaps.png'
import ward from '../assets/ward.png'
import shadow from '../assets/shadow.png'


const ToaPurple = () => {
    const toaImages = useMemo(() => [fang, lightbearer, mask, mbody, mchaps, shadow, ward], [])

    
    // const [selectedImages, setSelectedImages] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % toaImages.length)
        }, 500)

        return () => clearInterval(interval)
    },[toaImages])

    // randomly select an image from the images array on button click
    // const handleRandomizer = () => {
    //     const randomIndex = Math.floor(Math.random() * images.length)
    //     setSelectedImages(images[randomIndex])
    // }

  return (
    <div className="toa-container">
      <div className="image-container">
        <h3>TOA Purple</h3>
        {<img src={toaImages[currentImageIndex]} alt="Flickering" />}
      </div>
      <div className="checkbox-container">
        <input type="checkbox" label="Completed" />
      </div>
    </div>
  )
}

export default ToaPurple