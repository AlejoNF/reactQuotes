import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/colors'

import users from './json/users.json'
import UserBox from './components/UserBox'



function App() {
  //Esta funcion calcula un indice aleatorio

  const getIndexRandom = arr => Math.floor(Math.random()  * arr.length)
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]
  const firstUser = users[getIndexRandom(users)]


  //Aqui se extrae el elemento segun el indice random 
  const [randomQuote, setrandomQuote] = useState(firstQuote)
  const [randomColor, setrandomColor] = useState(firstColor)
  const [randomUser, setrandomUser] = useState(firstUser)

const backgroundObject = {
  backgroundColor: randomColor
}

//Esta funcion calcula una cita y un color random ahora tambien un usuario
const getRandomAll = () =>{
  setrandomQuote(quotes[getIndexRandom(quotes)])
  setrandomColor(color[getIndexRandom(color)])
  
}
const getRandomUser = () => {
  setrandomColor(color[getIndexRandom(color)])
  setrandomUser(users[getIndexRandom(users)])
}
  

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox
        randomQuote = {randomQuote} 
        randomColor = {randomColor}
        getRandomAll = {getRandomAll}
      />

      <UserBox
        randomUser = {randomUser}
        randomColor = {randomColor}
        getRandomUser = {getRandomUser}
        
      />
    </div>
  )
}

export default App
