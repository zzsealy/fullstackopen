
const filterReducer = (state = 'ALL', action) => {
  /*
    {
      type: 'SET_FILTER',
      payload: 'IMPORTANT'
    }
  */
    console.log('filterAction:', action)
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
    }
  }


export const filterChange = filter => {
    return {
        type: 'SET_FILTER',
        payload: filter
      }
  }


export default filterReducer