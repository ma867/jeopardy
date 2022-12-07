export default function ScoreButtons(props) {
    return (
        <div className='margin'>
            <button onClick={() => props.setCount(props.count - props.question.value)} className='decrease'>Decrease</button>
            <button onClick={() => props.setCount(props.count + props.question.value)} className='increase'>Increase</button>
            <button onClick={() => props.setCount(0)} className='reset'>Reset</button>

        </div>
    )
}