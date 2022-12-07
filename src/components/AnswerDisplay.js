export default function AnswerDisplay (props) {
  return (
    <h2 className='margin answer'>
      {
      props.question
        ? props.question.answer
        : ''
      }
    </h2>
  )
}
