import createStore from 'redux'


const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GOOD':
            const goodCount = state['good']
            const newState = {
                ...state,
                good: goodCount + 1
            }
            return newState
        case 'OK':
            const okCount = state['ok']
            const newOkState = {
                ...state,
                ok: okCount + 1
            }
            return newOkState
        case 'BAD':
            const badCount = state['bad']
            const newBadState = {
                ...state,
                bad: badCount + 1
            }
            return newBadState
        case 'ZERO':
            return {
                good: 0,
                ok: 0,
                bad: 0
            }
        default:
            return state
    }
}

export default counterReducer