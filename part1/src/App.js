import { useState, useEffect} from 'react'
import axios from 'axios'

const OnePerson = ({person}) => {
  return (
    <li>
      <p>{person.name}: {person.number}</p>
    </li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const hooks = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
      .then((response) => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hooks, [])
  console.log('render', persons.length, 'persons')

  const handleAddPerson = event => {
    setNewPerson(event.target.value)
  }

  const handleNewNumber = event => {
    setNewNumber(event.target.value)
  }

  const handlerSubmitNewPerson = () => {
    const url = 'http://localhost:3001/persons'
    let newPersonObj = {
      name: newPerson,
      number: newNumber
    }
    axios.post(url, newPersonObj)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
  }

  return (
    <div>
      <form>
        <input value={newPerson} onChange={handleAddPerson} placeholder='input new person name'></input><br></br>
        <input value={newNumber} onChange={handleNewNumber} placeholder='input new call number'></input><br></br>
        <button onClick={handlerSubmitNewPerson}>submit</button>
      </form>
      <ul>
        {persons.map(person => <OnePerson key={person.id} person={person} />)}
      </ul>
    </div>
  )
}

export default App