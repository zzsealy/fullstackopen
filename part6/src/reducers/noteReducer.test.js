import {store, noteReducer} from './noteReducer'
import deepFreeze from 'deep-freeze' // 用来确保reducer 被正确的定义为一个不可变的函数

describe('noteReucer', () => {
    test('returns new state with action NEW_NOTE', () => {
        const state = []
        const action = {
            type: 'NEW_NOTE',
            data: {
                content: 'the app state is in redux store',
                important: true,
                id: 1
            }
        }

        deepFreeze(state)  // 记录存储状态 reduce是push方法(原始的state改变)，那么测试不会通过, 应该使用concat方法(不改变原始的state)
        const newState = noteReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual(action.data)
    })
    
    test('return new state with action TOGGLE_IMPORTANCE', () => {
        const state = [
            {
                content: 'the app state is in redux store',
                import: true,
                id: 1
            },
            {
                content: 'state changes are made with actions',
                important: false,
                id:2
            }
        ]
        
        const action = {
            type: 'TOGGLE_IMPORTANCE',
            data: {
                id: 2
            }
        }
        deepFreeze(state)
        const newState = noteReducer(state, action)
        expect(newState).toHaveLength(2)
        expect(newState).toContainEqual(state[0])
        expect(newState).toContainEqual({
            content: 'state changes are made with actions',
            important: true,
            id:2
        })
    })
})


