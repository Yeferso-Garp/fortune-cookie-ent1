
import './App.css'
import phrases from "./Utils/phrases.json"
import Quote from './components/Quote'
import BtnQuote from './components/BtnQuote'
import { useState } from 'react'
import getRandomElemArray from './Utils/getRandonmElemArray'


function App() {

  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRandom);
  const [ numberBg, setNumberBg] = useState(numberRandom);

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }


  return (
    <div className='container' style = {bgStyle}>
      <div className='container__img__title'>
        <img className='images' src="https://www.imer.mx/radiolagarto/wp-content/uploads/sites/28/einstein_1947.jpg" alt="" />
        <h1 className='container__title'>Galleta de la fortuna</h1>
      </div>

      <Quote 
      phrase = { quote }
      bgSty = {bgStyle} 
      />

      <BtnQuote 
      setQuote = { setQuote } 
      phrases = { phrases }
      setNumberBg = {setNumberBg}
      />

    </div>
   
  )
}

export default App
