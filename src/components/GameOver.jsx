import React from 'react'

export const GameOver = ({ switchScreen, correctAnswers, totalQuestions}) => {
    console.log(totalQuestions, correctAnswers)
    return (
        <>
            <div className='quiz--screen quiz--screen1'>
                <h1>Your Score: {correctAnswers} / {totalQuestions}</h1>
                <h4>Would you like to play again</h4>
                <button onClick={switchScreen}>Yes</button>
            </div>
        </>
      )
}
