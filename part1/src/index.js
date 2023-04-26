import React from 'react'
import ReactDOM from 'react-dom/client'
import {store, noteReducer} from './reducers/noteReducer'

const App = () => {
  return (
    <div>
          {store.getState().map(note => 
                <li key={note.id}>
                  {note.content} <strong>{note.import ? 'important' : ''}</strong>
                </li>
            )}
    </div>
  )
}

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}

renderApp()
store.subscribe(renderApp)


