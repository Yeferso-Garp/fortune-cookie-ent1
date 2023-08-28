
const Quote = ( { phrase, bgSty} ) => {


  return (
    <div>
      <p className="container__phrase" style={bgSty}> {phrase.phrase} </p>
      <span className="container__author">Author: {phrase.author}</span>
    </div>
  )
}

export default Quote
