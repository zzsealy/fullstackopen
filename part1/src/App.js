import {useState} from 'react'


const History = (props) => {
  if (props.clickHistory.length === 0) {
    return (
      <h1>你还没点击过左右按钮。</h1>
    )
  }

  return (
    <h1>你的点击记录是: {props.clickHistory}。</h1>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // react hooks
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [clickHistory, setClickHistory] = useState([])

  const leftClicks = () => {
    setLeft(left + 1)
    setClickHistory(clickHistory.concat('L'))
  }

  const rightClicks = () => {
    setRight(right + 1)
    setClickHistory(clickHistory.concat('R'))
  }


  return (
    <div>
      <History clickHistory={clickHistory} />
      <p>left click time: {left}</p>
      <p>right click time: {right}</p>
      <Button handleClick={leftClicks} text='click left' />
      <Button handleClick={rightClicks} text='click right' />
    </div>
  )
}


export default App;
