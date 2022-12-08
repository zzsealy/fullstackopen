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


const Course = ({course}) => {
  const {name, parts} = course
  return (
    <div>
      <Header name={name} />
      <ul>
        {parts.map(part => <Part key={part.id} part={part} />)} 
      </ul>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App
