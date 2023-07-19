import { useState } from 'react'
import ToaPurple from './ToaPurple'
import CoxPurple from './CoxPurple'
import './style/header.css'

const Header = () => {
  const [selectedRaidOption, setSelectedRaidOption] = useState(null)

    const handleRaidButtonClick = (button) => {
      const options = ['ToaPurple', 'CoxPurple']
      const randomIndex = Math.floor(Math.random() * options.length)
        setSelectedRaidOption(options[randomIndex])
    }

  return (
    <div>
      <h2>Select your Path</h2>
      <div className="button-container">
        <button
          className={selectedRaidOption === 'Raid upgrade' ? 'active' : ''}
          onClick={() => handleRaidButtonClick('Raid upgrade')}
        >
          Raid upgrade
        </button>
        {/* Conditional rendering based on the selected option */}
        {/* <button
          className={selectedOption === 'Team challange' ? 'active' : ''}
          onClick={() => handleButtonClick('Team challange')}
          >
          Team challange
        </button>
        <button
          className={selectedOption === 'Grind Challange' ? 'active' : ''}
          onClick={() => handleButtonClick('Grind Challange')}
          >
          Grind Challange
        </button> */}
      </div>
        <div className={`raid-container ${selectedRaidOption ? 'fade-in' : ''}`}>
          {selectedRaidOption === 'ToaPurple' && <ToaPurple />}
          {selectedRaidOption === 'CoxPurple' && <CoxPurple />}
        </div>
    </div>
  )
}

export default Header