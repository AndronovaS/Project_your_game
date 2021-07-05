import {GET_CATEGORY,CHANGE_POINTS} from '../types/types'

export const getCategoryFromServer = (category) => {
  return {
    type: GET_CATEGORY,
    payload: category
  }
}



export const changePoints = (data) => {
  return {
    type: CHANGE_POINTS,
    payload: data
  }
}
