import { useState, useEffect, useRef} from 'react'

import sun from './img/sun.svg'
import moon from './img/moon.svg'

const BtnDarkMode = () => {

  const [darkMode, setDarkMode] = useState('light')
  const btnRef = useRef(null)

  useEffect(() => {
    if(darkMode === 'dark') {
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark')
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [darkMode])

  const handleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'dark' ? 'light' : 'dark'
    })
  }

  return ( 
    <button ref={btnRef} className="dark-mode-btn" onClick={handleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>
   );
}
 
export default BtnDarkMode;