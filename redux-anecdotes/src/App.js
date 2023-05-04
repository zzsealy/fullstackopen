import { useSelector, useDispatch } from 'react-redux'
import { voteNotification, addNotificatin } from './components/Notification'

const App = () => {
  const anecdotes = useSelector(state => {
    return state.sort((a, b) => b.votes - a.votes);
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteNotification(id))
  }

  const createNotification = (event) => {
    event.preventDefault();
    const content = event.target.notification.value;
    event.target.notification.value = 0;
    dispatch(addNotificatin(content))
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
      <h2>create new</h2>
      <form onSubmit={createNotification}>
        <input name='notification'/>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App