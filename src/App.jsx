import { useState } from 'react'
import './App.css'
import users from './data/users.json'
import colors from './data/colors'
import Cards from './components/Cards'

function App() {

  const [index, setIndex] = useState(0)
  const [indexColor, setIndexColor] = useState(0)

  const ramdomIndex = ()=> {
    const i = Math.floor(Math.random() * users.length)
    const c = Math.floor(Math.random() * colors.length)
    setIndex(i)
    setIndexColor(c)
  }
  return (
    <div className="App" style={ { backgroundColor: colors[indexColor] } }>
      <Cards user={users[index]} color={colors[indexColor]} />
      <button className='btn' type='button' onClick={ ()=> ramdomIndex() }><i className="fa-solid fa-shuffle"></i></button>
    </div>
  )
}

export default App
