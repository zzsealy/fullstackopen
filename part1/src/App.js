
const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age  // 函数内定义函数
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'drq' 
  const age = 25
  
  return(
    <div>
      <Hello name={name} age={age} />
    </div >

  )
}


export default App;
