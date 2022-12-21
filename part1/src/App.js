import { useState, useEffect} from 'react'
import axios from 'axios'

const OneNote = ({note}) => {
  return (
    <li>
      <p>{note.name}: {note.number}</p>
    </li>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const hooks = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
      .then((response) => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  useEffect(hooks, [])
  console.log('render', notes.length, 'notes')

  return (
    <div>
      <ul>
        {notes.map(note => <OneNote key={note.id} note={note} />)}
      </ul>
    </div>
  )
}

export default App