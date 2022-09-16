import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import QuoteButton from './components/QuoteButton'
import quotes from './json/quotes.json'
import color from './utils/colors'




function App() {
  //Esta funcion calcula un indice aleatorio

  const getIndexRandom = arr => Math.floor(Math.random()  * arr.length)
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  //Aqui se extrae el elemento segun el indice random 
  const [randomQuote, setrandomQuote] = useState(firstQuote)
  const [randomColor, setrandomColor] = useState(firstColor)

const backgroundObject = {
  backgroundColor: randomColor
}

//Esta funcion calcula una cita y un color random 
const getRandomAll = () =>{
  setrandomQuote(quotes[getIndexRandom(quotes)])
  setrandomColor(color[getIndexRandom(color)])
  
}
  

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox
        randomQuote = {randomQuote} 
        randomColor = {randomColor}
        getRandomAll = {getRandomAll}
      />
      
      
    </div>
  )
}

export default App
