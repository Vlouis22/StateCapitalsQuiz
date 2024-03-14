import { useState } from 'react'
import { Quiz } from './components/Quiz'
import { StartScreen } from './components/StartScreen'
import { SelectMode } from './components/SelectMode'
import { GameOver } from './components/GameOver'



function App() {

  const [startGame, setStartGame] = useState(0)
  const [difficultyLevel, setDifficultyLevel] = useState();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestionsAsked, setTotalQuestionsAsked] = useState(0);

  const mode = () => {
    if (startGame === 0) {
      return <StartScreen switchScreen={switchScreen} />
    }
    else if (startGame === 1) {
      return <SelectMode switchScreen={switchScreen} changeDifficulty={changeDifficulty} />
    }
    else if (startGame === 2) {
      return <Quiz difficultyLevel={difficultyLevel} switchScreen={switchScreen} correctAnswers={addCorrect} totalQuestionsAsked={addTotalQuestion} rightAnswers={correctAnswers} total={totalQuestionsAsked} />
    }
    else {
      return <GameOver switchScreen={switchScreen} correctAnswers={correctAnswers} totalQuestions={totalQuestionsAsked} />
    }
  }

  function switchScreen() {
    if (startGame == 1 && !difficultyLevel) {
      alert("Must select a difficulty level")
    }
    else {
      setStartGame(s => s += 1)
      if (startGame >= 3) {
        setStartGame(1);
        setCorrectAnswers(0);
        setTotalQuestionsAsked(0);
      }
    }
  }

  function changeDifficulty(e) {
    setDifficultyLevel(e.target.value);
  }

  function addCorrect() {
    setCorrectAnswers(correctAnswers + 1)
  }

  function addTotalQuestion() {
    setTotalQuestionsAsked(totalQuestionsAsked + 1)
  }

  return (
    <>
      { startGame !== 2 ? 
      <div>
      <h1>Do you know your state capitals?</h1>
      <h3>Test your knowledge on US state capitals by taking this quiz</h3>
      <p>Number of questions: 10</p>
      </div>
      : null
      }
      {mode()}
    </>
  )
}

export default App
