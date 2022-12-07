import {useState} from 'react'

const Display = (props) => <div>{ props.counter }</div>


const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

const App = () => {
  // react hooks
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('clicked')
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
  }

  const setZero = () => {
    setCounter(0)
  }


  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="增加" />
      <Button onClick={decreaseByOne} text="减少" />
      <Button onClick={setZero} text="置0" />
    </div>
  )
}


export default App;
