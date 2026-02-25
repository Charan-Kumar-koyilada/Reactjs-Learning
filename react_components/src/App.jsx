// import React from 'react'
// import Card from './components/card'
// const App = () => {
//   return (
//     <div>
//       <div className='card'>
//         what are doing
//       </div>
//       {Card()}
//     </div>
//   )
// }

// export default App

//To print a var in a function 


import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'
const App = () => {

    const name = 'Charan'
    return (
        <div>
            <div className='card'>
                what are doing
            </div>
            {Card()}
            <h1>Hello Everyone ,this is {name}</h1>
            <Navbar />
        </div>
    )
}

export default App


