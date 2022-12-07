import { useState, useEffect } from 'react'
import QuestionDisplay from '../components/QuestionDisplay'
import CategoryDisplay from '../components/CategoryDisplay'
import PointsDisplay from '../components/PointsDisplay'
import AnswerDisplay from '../components/AnswerDisplay'
import ScoreButtons from '../components/ScoreButtons'
export default function Main (props) {
  const [question, setQuestion] = useState(null)
  const [count, setCount] = useState(0)

  const getQuestion = async () => {
    try {
      const response = await fetch('https://jservice.io/api/random')
      const data = await response.json()
      setQuestion(data[0])
    } catch (error) {
      console.error(error)
    }

    document.querySelector('.hide-question').classList.add('show')
    document.querySelector('.answer').classList.remove('show')
  }

  // useEffect(() => {
  //   getQuestion()
  // }, [])

  const revealAnswer = () => {
    const answer = document.querySelector('.answer')
    answer.classList.toggle('show')
  }

  const revealQuestion = () => {
    const question = document.querySelector('.question')
    question.classList.toggle('show')
  }

  

  return (
    <>
      <h1>Welcome to Jeopardy!</h1>
      <h2 id='score'>Score: <span>{count}</span></h2>
      <ScoreButtons setCount={setCount} count={count} question={question}></ScoreButtons>

    
      
      <CategoryDisplay question={question} />
      <PointsDisplay question={question} />

      <div className='hide-question'>
        <input onClick={revealQuestion} className='increase'type='submit' value='Show Question' />
        <QuestionDisplay question={question} />
      </div>

      <input onClick={revealAnswer} className='increase' type='submit' value='Reveal Answer' />
      <AnswerDisplay question={question} />
      <input onClick={getQuestion} className='increase' type='submit' value='Get Started!' />
    </>
  )
}
