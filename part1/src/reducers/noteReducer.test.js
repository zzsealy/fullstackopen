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

        deepFreeze(state)  // 记录存储状态 reduce是push方法不是concat方法，那么测试不会通过
        const newState = noteReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual(action.data)
    })
})


