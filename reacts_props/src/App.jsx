import React from 'react'
import Card from './components/card'
//This is how we pass values to the functions in react js 
const App = () => {
  return (
    <div>
      <Card user='Aparna gelli' age={19} />
    </div>
  )
}

export default App
