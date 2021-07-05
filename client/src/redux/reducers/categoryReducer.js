import {GET_CATEGORY} from '../types/types'


const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return action.payload
    default:
      return state
  }
}

export default categoryReducer
