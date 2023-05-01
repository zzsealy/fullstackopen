import deepFreeze from 'deep-freeze'
import counterReducer from './unicafeReducer'


describe('unicafe reducer', () => {
    const initialState = {
        good: 0,
        ok: 0,
        bad: 0
    }

    test('should return a proper initial state when called with undefined state', () => {
        const state = {}
        const action = {
            type: 'DO_NOTHING'
        }

        const newState = counterReducer(undefined, action) // 传入undefined reducer会使用默认的initialData
        expect(newState).toEqual(initialState)
    })

    test('good is incremented', () => {
        const action = {
            type: 'GOOD'
        }
        const state = initialState
        deepFreeze(state)
        const newState = counterReducer(state, action)
        expect(newState).toEqual({
            good: 1,
            ok: 0, 
            bad: 0
        })
        
        const okAction = {
            type: 'OK'
        }
        const newOkState = counterReducer(newState, okAction)
        expect(newOkState).toEqual({
            good: 1,
            ok: 1,
            bad: 0
        })

        const badAction = {
            type: 'BAD'
        }
        const newBadState = counterReducer(newOkState, badAction)
        expect(newBadState).toEqual({
            good: 1,
            ok: 1,
            bad: 1
        })
    })
})