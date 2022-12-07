export default function CategoryDisplay (props) {
  return (
    <>
      {
      props.question
        ? <><h2 className='margin'>Category: <span>{props.question.category.title}</span></h2></>
        : ''
      }
    </>
  )
}
