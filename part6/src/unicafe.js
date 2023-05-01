import unicafeReduce from './reducers/unicafeReducer'
import { useState } from 'react'

const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [ok, setOk] = useState(0)
    const unicafeClick = (clickAction) => {
        let actionType = ''
        if (clickAction === 'good') {
            actionType = 'GOOD'
        } else if(clickAction == 'ok') {
            actionType = 'OK'
        } else if(clickAction === 'bad') {
            actionType = 'BAD'
        } else if(clickAction === 'reset') {
            actionType = 'ZERO'
        } else {
            actionType = ''
        }
        const action = {
            type: actionType
        }
        const state = {
            good: good,
            ok: ok,
            bad: bad
        }

        const newState = unicafeReduce(state, action)
        setGood(newState.good)
        setBad(newState.bad)
        setOk(newState.ok)
    }

    return (
        <div>
            <button onClick={() => unicafeClick('good')}>good</button>
            <button onClick={() => unicafeClick('ok')}>ok</button>
            <button onClick={() => unicafeClick('bad')}>bad</button>
            <button onClick={() => unicafeClick('reset')}>reset state</button>
            <br></br>
            <p>good: {good} ok: {ok} bad: {bad}</p>
        </div>
    )
}

export default Unicafe