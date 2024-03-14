import React, { useEffect, useState, useMemo } from 'react'
import quizQuestions from '../data';

export const Quiz = ({ difficultyLevel, switchScreen, correctAnswers, totalQuestionsAsked, rightAnswers, total }) => {

    const [allQuestions, setAllQuestions] = useState();
    const [questions, setQuestions] = useState();
    const [gameStarted, setGameStarted] = useState(false);
    const [currentQuestion, SetCurrentQuestion] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("")
    let answer = "";
    let selected = "";
    const [yourAnswer, setYourAnswer] = useState("")

    useEffect(() => {
        setAllQuestions(quizQuestions);
    }, []);

    useEffect(() => {
        setAnswered(false);
    }, [currentQuestion]);

    useEffect(() => {
        if (!gameStarted && allQuestions) {
            setQuestions(setNewQuestions());
        }
    }, [gameStarted, allQuestions, difficultyLevel])

    console.log("your answer: ", selected)

    function setNewQuestions() {
        let quizArr = []
        let questPool = []
        if (difficultyLevel === "easy") {
            questPool.push(0);
            questPool.push(14);
        }
        else if (difficultyLevel === "medium") {
            questPool.push(15);
            questPool.push(34);
        }
        else {
            questPool.push(35);
            questPool.push(49);
        }

        while (quizArr.length !== 10) {
            let diff = questPool[1] - questPool[0];
            let randomNum = Math.floor(Math.random() * diff) + questPool[0];
            if (quizArr.indexOf(randomNum) === -1) {
                quizArr.push(randomNum);
            }

        }
        return quizArr;
    }

    function switchQuestion() {
        if (!answered) {
            alert("Must answer before going to next question")
        }
        else {
            if (currentQuestion === 9) {
                switchScreen();
            }
            SetCurrentQuestion(prev => prev + 1);
        }
        setAnswered(false);
        document.querySelectorAll('li').forEach((element) => {
            element.classList.remove('not--visible');
        });

    }

    function shuffle(array) {
        if (!answered) {

            let currentIndex = array.length, randomIndex;

            while (currentIndex > 0) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
        }

        return array;
    }

    const getQuestion = useMemo(() => {
        if (allQuestions && questions) {
            const currQuestion = allQuestions[questions[currentQuestion]];
            const currQuestionArray = shuffle([0, 1, 2, 3]);
            answer = currQuestion.correctAnswer;
            return (
                <>
                    {answered ?

                        <div className={`quiz--question quiz--question--answered`}>
                            <h2>{`Your answer: ${yourAnswer}`}</h2>
                            <h2>{`Correct Answer: ${answer}`}</h2>
                        </div>
                        :
                        <>
                        <h2 className='score'>Current Score: {total > 0 ? (Math.ceil(rightAnswers / total * 100)) : 0}%</h2>
                        <h1 className='quiz--question'>
                            {`What is the capital of "${currQuestion.state}"?`}
                        </h1>
                        </>
                    }

                    <ol className='list--of--questions'>
                        <li className='first--answer' onClick={handleInput}>{currQuestion.choices[currQuestionArray[0]]}</li>
                        <li className='second--answer' onClick={handleInput}>{currQuestion.choices[currQuestionArray[1]]}</li>
                        <li className='third--answer' onClick={handleInput}>{currQuestion.choices[currQuestionArray[2]]}</li>
                        <li className='fourth--answer' onClick={handleInput}>{currQuestion.choices[currQuestionArray[3]]}</li>
                    </ol>
                </>
            )
        }
    }, [questions, currentQuestion, answered]);

    function checkAnswer() {
        if (!answered) {
            if (answer === selected) {
                correctAnswers()
            }
            totalQuestionsAsked()
        }
        console.log("question answeered? " + answered)
        if (answered) {
            if (answer == selected) {
                setBackgroundColor("green")
            }
            else {
                setBackgroundColor("red")
            }

        }
        else {
            setBackgroundColor("purple")
        }
        console.log(backgroundColor)
    }


    function handleInput(e) {
        e.preventDefault();
        console.log("your answer1: ", yourAnswer)
        selected = e.target.innerText;
        setYourAnswer(prev => e.target.innerText)
        console.log("your answer2: ", yourAnswer)
        checkAnswer();
        setAnswered(true);
        document.querySelectorAll('li').forEach((element) => {
            element.classList.add('not--visible');
        });

    }


    return (
        <div className='quiz--screen--questions center'>
            <button className='next--question--button' onClick={switchQuestion}>Next Question</button>
            {getQuestion}
        </div>
    )
}
