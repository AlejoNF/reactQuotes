import React from 'react'

const UserBox = ({randomUser,randomColor,getRandomUser}) => {

    console.log(randomUser)

    const colorUser = {
        color: randomColor
    }
    const backgroundObj = {
        backgroundColor: randomColor
    }

  return (
    <article style = {colorUser} className = 'card'>
        <header className='user-card__picture'>
            <h1>{`${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`}</h1>
            <img className='img-picture' src={randomUser.picture.large} alt="" />
        </header>

        <div className='list_content'>
        <ul className='user__list'>
            <li><span>📧 &nbsp;Email:  </span>{randomUser.email}</li>
            <li><span>📱  &nbsp; Phone Number: </span> {randomUser.phone}</li>
            <li><span>🌄 Location :</span>{` ${randomUser.location.city} , ${randomUser.location.country} , ${randomUser.location.state}`}</li>
        </ul>  
        </div>
        
        <button className='card__btn' style={backgroundObj} onClick={getRandomUser}> Next User</button>
   

    </article>
  )
}

export default UserBox