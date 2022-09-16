import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({randomQuote,randomColor,getRandomAll}) => {

    console.log(randomQuote)

    const colorObj ={
        color: randomColor
    }

    
  return (
    <article style={colorObj}className='card'>
        <p className='card__quote'>{randomQuote.quote}</p>
        <h1 className='card__author'>{randomQuote.author}</h1>
        <QuoteButton randomColor = {randomColor} getRandomAll = {getRandomAll}/>
        
        </article>
  )
}

export default QuoteBox