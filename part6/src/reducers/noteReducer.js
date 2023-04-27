
import { createStore } from 'redux'

const noteReducer = (state = [], action) => {
    // state 最开始是个空数组
    switch (action.type) {
        case 'NEW_NOTE':
            return [...state, action.data]
        case 'TOGGLE_IMPORTANCE': {
            const id = action.data.id
            const noteTochange = state.find(n => n.id === id)
            const changeNote = {
                ...noteTochange,
                important: !noteTochange.important
            }
            return state.map(note => 
                    note.id !== id ? note : changeNote
                )
        }
        default:
        return state

    }
}

const store = createStore(noteReducer)


store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'the app state is in redux store',
        import: true,
        id: 1
    }
})


store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'state changes are made with actions',
        import: false,
        id: 2
    }
})

export { 
    store,
    noteReducer
}