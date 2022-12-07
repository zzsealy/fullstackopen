import {useState} from 'react'


const History = (props) => {
  if (props.clickHistory === 0) {
    return (
      <h1>你还没点击过左右按钮。</h1>
    )
  }

  return (
    <h1>你的点击记录是: {props.clickHistory}。</h1>
  )
}

const App = () => {
  // react hooks
  const [clicks, setClicks] = useState({
    'left': 0,
    'right': 0
  })

  const [clickHistory, setClickHistory] = useState([])

  const leftClicks = () => {
    setClicks({...clicks, left: clicks.left + 1})
    setClickHistory(clickHistory.concat('L'))
  }

  const rightClicks = () => {
    setClicks({...clicks, right: clicks.right + 1})
    setClickHistory(clickHistory.concat('R'))
  }


  return (
    <div>
      <History clickHistory={clickHistory} />
      <p>left click time: {clicks.left}</p>
      <p>right click time: {clicks.right}</p>
      <button onClick={leftClicks}>click left</button>
      <button onClick={rightClicks}>click right</button>
    </div>
  )
}


export default App;
