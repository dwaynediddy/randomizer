import { useState, useEffect, useMemo } from 'react'

// cox images
import dex from '../assets/dex.png'
import arcane from '../assets/arcane.png'
import ahat from '../assets/ahat.png'
import atop from '../assets/atop.png'
import alegs from '../assets/alegs.png'
import buckler from '../assets/buckler.png'
import dhcb from '../assets/dhcb.png'
import dinz from '../assets/dinz.png'
import kodai from '../assets/kodai.png'
import claws from '../assets/claws.png'
import maul from '../assets/maul.png'
import tbow from '../assets/tbow.png'



const CoxPurple = () => {
    const coxImages = useMemo(() => [dex, arcane, ahat, atop, alegs, buckler, dhcb, dinz, kodai, claws, maul, tbow], [])
    
    // const [selectedImages, setSelectedImages] = useState(null)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % coxImages.length)
        }, 500)

        return () => clearInterval(interval)
    },[coxImages])

    // randomly select an image from the images array on button click
    // const handleRandomizer = () => {
    //     const randomIndex = Math.floor(Math.random() * images.length)
    //     setSelectedImages(images[randomIndex])
    // }

  return (
    <div>
        <div>
            <h3>COX Purple</h3>
            {<img src={coxImages[currentImageIndex]} alt="Flickering" />}
        </div>
        {/* //  button that randomly displays an image from the images array 
        <button onClick={handleRandomizer} />
        {selectedImages && <img src={selectedImages} alt={selectedImages} />} */}
    </div>
  )
}

export default CoxPurple