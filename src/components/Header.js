import { useState } from 'react'
import ToaPurple from './ToaPurple'
import CoxPurple from './CoxPurple'
import './style/header.css'

const Header = () => {
  const [selectedOption, setSelectedOption] = useState(null)

    const handleButtonClick = (button) => {
      const options = ['ToaPurple', 'CoxPurple']
      const randomIndex = Math.floor(Math.random() * options.length)
        setSelectedOption(options[randomIndex])
    }

  return (
    <div>
      <h2>Select your Path</h2>
      <div className="button-container">
        <button
          className={selectedOption === 'Raid upgrade' ? 'active' : ''}
          onClick={() => handleButtonClick('Raid upgrade')}
        >
          Raid upgrade
        </button>
        {/* Conditional rendering based on the selected option */}
        {selectedOption === 'ToaPurple' && <ToaPurple />}
        {selectedOption === 'CoxPurple' && <CoxPurple />}
        <button
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
        </button>
      </div>
    </div>
  )
}

export default Header