import React from 'react'

const card = (props) => {
    return (
        <div className='parent'>
            {/* <div className='card'>
                <img src='https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Profile image'></img>
                <h1>Charan kumar koyilada</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button >View profile</button>
            </div> */}
            <div className='card'>
                <img src='https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Profile image'></img>
                <h1>{props.user},{props.age}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button >View profile</button>
            </div>
        </div>

    )
}

export default card
