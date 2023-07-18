import { useState } from 'react'
import './style/header.css'

const Header = () => {
    const [activeButton, setActiveButton] = useState(null)

    const handleButtonClick = (button) => {
        setActiveButton(button)
    }

  return (
    <div>
      <h2>Select your Path</h2>
      <div className="button-container">
        <button
          className={activeButton === 'Raid upgrade' ? 'active' : ''}
          onClick={() => handleButtonClick('Raid upgrade')}
        >
          Raid upgrade
        </button>
        <button
          className={activeButton === 'Team challange' ? 'active' : ''}
          onClick={() => handleButtonClick('Team challange')}
        >
          Team challange
        </button>
        <button
          className={activeButton === 'Grind Challange' ? 'active' : ''}
          onClick={() => handleButtonClick('Grind Challange')}
        >
          Grind Challange
        </button>
      </div>
    </div>
  )
}

export default Header