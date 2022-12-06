
const Content = (props) => {
  const parts = props.parts
  return (
    <div>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
    </div>
  )

}

const App = () => {
  const course = {
    'name': 'Half Stack application development',
    'parts': [
      {
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
  }
  
  let count_exercises = 0
  course.parts.forEach(part => {
        count_exercises = count_exercises + part.exercises
      })
  
  return(
    <div>
      <h1>{course.name}</h1>
      <Content parts={ course.parts } />
      <strong><p>Number of exercises {count_exercises}</p></strong>
    </div >

  )
}


export default App;
