import React from 'react'
import Card from './components/card'
//This is how we pass values to the functions in react js 
const App = () => {
  return (
    <div className='parent'>
      <Card user='Aparna gelli' age={19} />
      <Card user='Ayesha ' age={21} />
    </div>
  )
}

export default App
