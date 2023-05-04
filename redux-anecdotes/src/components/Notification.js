import { getId } from '../reducers/anecdoteReducer'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
    </div>
  )
}

export const voteNotification = (id) => {
  const action = {
    type: 'vote',
    payload: {
      id: id 
    }
  }
  return action
}


export const addNotificatin = (content) => {
  const action = {
    type: 'addNotification',
    payload: {
      content: content,
      id: getId(),
      votes: 0
    }
  }
  return action
}

export default Notification