export default function PointsDisplay (props) {
  return (
    <>
      {
      props.question
        ? <><h2 className='margin'>Points: <span>{props.question.value}</span></h2></>
        : ''
      }
    </>
  )
}
