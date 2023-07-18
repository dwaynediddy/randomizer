import { useState, useEffect } from 'react'

import fang from '../assets/fang.png'
import lightbearer from '../assets/lightbearer.png'
import mask from '../assets/mask.png'
import mbody from '../assets/mbody.png'
import mchaps from '../assets/mchaps.png'
import ward from '../assets/ward.png'
import shadow from '../assets/shadow.png'

const Randomizer = () => {
    const images = [fang, lightbearer, mask, mbody, mchaps, shadow, ward]
    
    // const [selectedImages, setSelectedImages] = useState(null)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 500)

        return () => clearInterval(interval)
    },[images])

    // randomly select an image from the images array on button click
    // const handleRandomizer = () => {
    //     const randomIndex = Math.floor(Math.random() * images.length)
    //     setSelectedImages(images[randomIndex])
    // }

  return (
    <div>
        {<img src={images[currentImageIndex]} alt="Flickering" />}
        {/* //  button that randomly displays an image from the images array 
        <button onClick={handleRandomizer} />
        {selectedImages && <img src={selectedImages} alt={selectedImages} />} */}
    </div>
  )
}

export default Randomizer