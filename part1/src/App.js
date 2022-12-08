import {useState} from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


const Display = ({ newValue }) => {
  return (
    <h1>{newValue}</h1>
  )
}

const App = () => {
  // react hooks
  const [value, setValue] = useState(0)

  const setToValue = (value) => {
    return () => {
      console.log('click!')
      setValue(value)
    }
  }


  return (
    <div>
      <Display newValue={value} />
      <Button handleClick={setToValue(value + 1)} text='点击增加value'></Button>
     </div>
  )
}


export default App;
