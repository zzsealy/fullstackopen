import { useState } from 'react'

const Number = ({ person }) => {
  return (
    <li>{person.name}: {person.phone}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '88998899'}
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }


  const submitNewName = (event) => {
    event.preventDefault()
    let hasPerson = persons.filter((person) => person.name === newName)
    if (hasPerson.length === 0) {
      const newPerson = {
        name: newName,
        phone: newPhone
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
    } else {
      alert(`${newName} is already added to phone book`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ul>
        {persons.map(person => <Number key={person.name} person={person} />)}
      </ul> 
      <h2>Numbers</h2>
      <form onSubmit={submitNewName}>
        <input value={newName} placeholder='Please input a new name' onChange={handleNewName} />
        <input value={newPhone} placeholder='Please input a new phone number' onChange={handleNewPhone} />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default App