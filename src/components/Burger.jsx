import React, { useState } from 'react'

function Burger(props) {
    const [like, setLike] = useState(0)

    //Handle like using number state type
    const handleClick = (burger) => {
        props.handleParentClick(burger)
    }
  return (
    <div className='burger'>
        <img className='burgerImg' src="./burger.jpeg" alt="burger" />
        <div>
            <div>{ props.burgerName }</div>
                <button onClick={() => handleClick(props.burgerName)}>Commander</button>
            <div>
                <button onClick={() => setLike(like + 1)}>Like {like}</button>
            </div>
            
        </div>
    </div>
    
  )
}

export default Burger