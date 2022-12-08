const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}


const Part = ({ part }) => {
  return (
    <li>{part.name} {part.exercises}</li>
  )
}


const ShowTotalExercises = ({parts}) => {
  let totalExercisesList = []

  parts.forEach(part => {
    totalExercisesList.push(part.exercises)
  });
  
  const total = totalExercisesList.reduce((s, p) => {
    console.log('what is happening', s, p)
    return s + p
  })

  return (
    <strong>Total of {total} exercises.</strong>
  )
}

const Course = ({course}) => {
  const {name, parts} = course
  return (
    <div>
      <Header name={name} />
      <ul>
        {parts.map(part => <Part key={part.id} part={part} />)} 
      </ul>
      <ShowTotalExercises parts={course.parts} />
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return courses.map(course => <Course key={course.id} course={course} />) 
}

export default App
