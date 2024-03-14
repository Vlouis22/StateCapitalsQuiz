import React from 'react'

export const SelectMode = ({ switchScreen, changeDifficulty}) => {
    return (
        <>
            <div className='quiz--screen quiz--screen1'>
                <h1>Quiz App</h1>
                <h4>Select Quiz difficulty</h4>
                <div className='mode--selection'>
                <button onClick={changeDifficulty} value={"easy"}>Easy</button>
                <button onClick={changeDifficulty} value={"medium"}>Medium</button>
                <button onClick={changeDifficulty} value={"hard"}>Hard</button>
                </div>
                <button className='start--game--button' onClick={switchScreen}>Start Game</button>
            </div>
        </>
    )
}
