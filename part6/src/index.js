import React from 'react'
import ReactDOM from 'react-dom/client'
import {store, noteReducer} from './reducers/noteReducer'

import Unicafe from './unicafe'

const App = () => {
  return (
    <div>
          {store.getState().map(note => 
                <li key={note.id}>
                  {note.content} <strong>{note.import ? 'important' : ''}</strong>
                </li>
            )}
            <Unicafe />
            
    </div>
  )
}

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}

renderApp()
store.subscribe(renderApp)


