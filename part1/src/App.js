import Note from './components/Note'


const App = (props) => {
  // react hooks
  const notes = props.notes
  let contents = []
  notes.forEach(note => {
    contents = contents.concat(note.content) 
  });

  return (
    <div>
      <ul>
        {notes.map(note => <Note key={note.id} note={note} /> 
        )}
      </ul>
    </div>
  )
}


export default App;
