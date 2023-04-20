
import { createStore } from 'redux'

const noteReducer = (state = [], action) => {
    // state 最开始是个空数组
    if (action.type == 'NEW_NOTE') {
        state.push(action.data)
        return state
    }
    return state
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

export default store