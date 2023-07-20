import { useState, useRef } from 'react'
import ToaPurple from './ToaPurple'
import CoxPurple from './CoxPurple'
import './style/header.css'

const Header = () => {
  const [selectedRaidOption, setSelectedRaidOption] = useState(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const resetButtonRef = useRef(null)

  const handleRaidButtonClick = () => {
    if (!isButtonDisabled) {
      const options = ['ToaPurple', 'CoxPurple'];
      const randomIndex = Math.floor(Math.random() * options.length);
      setSelectedRaidOption(options[randomIndex]);
      setIsButtonDisabled(true);
    }
  }

  const handleResetButtonClick = () => {
    setSelectedRaidOption(null);
    setIsButtonDisabled(false);
    resetButtonRef.current.blur(); // Remove focus from the reset button after clicking
  }


  return (
    <div>
      <h2>Select your Path</h2>
      <div className="button-container">
      <button
          className={selectedRaidOption === 'Raid upgrade' ? 'active' : ''}
          onClick={handleRaidButtonClick}
          disabled={isButtonDisabled} // Disable the button after it's clicked
        >
          Raid upgrade
        </button>
        <button ref={resetButtonRef} onClick={handleResetButtonClick}>
          Reset
        </button>
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
          <div>
            {selectedRaidOption === 'ToaPurple' && <ToaPurple />}
          </div>
          <div>
            {selectedRaidOption === 'CoxPurple' && <CoxPurple />}
          </div>
        </div>
    </div>
  )
}

export default Header