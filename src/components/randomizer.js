import { useState } from 'react'

import fang from '../assets/fang.png'
import lightbearer from '../assets/lightbearer.png'
import mask from '../assets/mask.png'
import mbody from '../assets/mbody.png'
import mchaps from '../assets/mchaps.png'
import ward from '../assets/ward.png'
import shadow from '../assets/shadow.png'

const randomizer = () => {
    const images = [fang, lightbearer, mask, mbody, mchaps, shadow, ward]
    
    const [selectedImages, setSelectedImages] = useState(null)

    const handleRandomizer = () => {
        const randomIndex = Math.floor(Math.random() * images.length)
        setSelectedImages(images[randomIndex])

    }

  return (
    <div>
        <button onClick={handleRandomizer} />
        {selectedImages && <img src={selectedImages} alt={selectedImages} />}
    </div>
  )
}

export default randomizer