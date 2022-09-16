import React from 'react'

const QuoteButton = ({randomColor,getRandomAll}) => {

    const colorObj ={
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor:randomColor
    }
  return (
    <div style = {colorObj} className='card__button'>
        <button className='card__btn' style={backgroundObj} onClick={getRandomAll} >
            &#62;
        </button>
    </div>
  )
}

export default QuoteButton