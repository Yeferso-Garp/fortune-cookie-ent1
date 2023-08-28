import getRandomElemArray from "../Utils/getRandonmElemArray";


const BtnQuote = ( {setQuote, phrases, setNumberBg} ) => {

    const handleRandomPhrase = () => {
        setQuote( getRandomElemArray( phrases ) )
        setNumberBg( getRandomElemArray( [1, 2, 3, 4] ) )
    }


  return (
    <button className="container__button" onClick = { handleRandomPhrase }>Other phrase</button>
  )
}

export default BtnQuote