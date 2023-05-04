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

export default Notification