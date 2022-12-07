import {useState} from 'react'

const App = () => {
  // react hooks
  const [clicks, setClicks] = useState({
    'left': 0,
    'right': 0
  })

  const leftClicks = () => {
    setClicks({...clicks, left: clicks.left + 1})
  }

  const rightClicks = () => {
    setClicks({...clicks, right: clicks.right + 1})
  }

  return (
    <div>
      <p>left click time: {clicks.left}</p>
      <p>right click time: {clicks.right}</p>
      <button onClick={leftClicks}>click left</button>
      <button onClick={rightClicks}>click right</button>
    </div>
  )
}


export default App;
