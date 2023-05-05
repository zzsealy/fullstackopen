import { useSelector, useDispatch } from 'react-redux'
import { addNotificatin } from './Notification'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const createNotification = (event) => {
    event.preventDefault();
    const content = event.target.notification.value;
    event.target.notification.value = 0;
    dispatch(addNotificatin(content))
  }

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={createNotification}>
            <input name='notification'/>
            <button type='submit'>create</button>
        </form>
      </div>
    )
}

export default AnecdoteForm