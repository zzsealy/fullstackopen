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
  const [beforeFilterPerson, setBeforeFilterPerson] = useState('')
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }


  const handleFilterName = (event) => {
    debugger;
    let filterKey = event.target.value
    let newPersons = []
    if (filterKey) {
      beforeFilterPerson.map(person => {
        let name = person.name
        if (name.search(filterKey) != -1) {
          newPersons.push(person)
        }
      })
      setPersons(newPersons)
    } else {
      setPersons(beforeFilterPerson)
    }
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
      setBeforeFilterPerson(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
    } else {
      alert(`${newName} is already added to phone book`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Filter the name with:  <input placeholder='input filter name' onChange={handleFilterName}></input> </p>
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