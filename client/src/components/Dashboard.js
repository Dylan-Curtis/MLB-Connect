import { useState } from 'react'
import GameContainer from './GameContainer'
import SignupForm from './SignupForm'
import BlankGame from './BlankGame'

function Dashboard({user, setUser, errors, setErrors, setBackground}) { 
  const [startGame, setStartGame] = useState(false)
  setBackground("App-background7")

  const gamePage = !user ? (
    <SignupForm setUser={setUser} errors={errors} setErrors={setErrors} user={user} />
  ) : startGame ? (
    <GameContainer user={user}/>
  ) : (
    <BlankGame setStartGame={setStartGame}/>
  )
  
  return (
    <div>
      {gamePage}
    </div>
  )
}

export default Dashboard