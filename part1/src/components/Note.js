import React from 'react'


const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'make not import': 'make import'

    return (
        <li>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}


export default Note