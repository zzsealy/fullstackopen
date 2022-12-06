
const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
    }]
  
  const part_jsx = parts.map((part, index) => 
    <p key={index}> {part.name} {part.exercises}</p>
  )
  let count_exercises = 0
  parts.forEach(part => {
    count_exercises = count_exercises + part.exercises
  })
  
  return (
    <div>
      <h1>{course}</h1>
      <ul>
        {part_jsx}
      </ul>
      <strong><p>Number of exercises {count_exercises}</p></strong>
    </div>

  )
}


export default App;
