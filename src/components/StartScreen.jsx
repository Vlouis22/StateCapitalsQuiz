import React from 'react'

export const StartScreen = ({switchScreen}) => {
  return (
    <>
        <div className='quiz--screen quiz--screen1'>
            <h1>Quiz App</h1>
            <h4>click the start button to get started</h4>
            <button onClick={switchScreen}>Start Game</button>
        </div>
    </>
  )
}
