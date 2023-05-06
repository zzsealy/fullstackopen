import { useSelector, useDispatch } from 'react-redux'
import { voteNotification } from './Notification'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.sort((a, b) => b.votes - a.votes);
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteNotification(id))
  }

  return (

    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList