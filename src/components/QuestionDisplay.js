export default function QuestionDisplay (props) {
  return (
    <>
      {
      props.question
        ? <><h2 className='margin question'>Question: <span>{props.question.question}</span></h2></>
        : ''
      }
    </>
  )
}
