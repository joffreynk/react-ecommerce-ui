
import { GETALL, CREATE, GETONE, UPDATE, DELETE } from "../actions"

export const usersReducer = (state, action) => {
  switch(action.type){
    case GETALL:
      return state = {...state, listOfusers: action.payload}
      break;
    case CREATE || UPDATE:
      return  state = {...state, listOfusers: [...listOfusers, action.payload] }
      break;
    case GETONE:
      return {...state, newUser: action.payload}
      break
    case DELETE:
      return {...state, message: action.payload}
      break;
    default: return state
  }
}

export const initialUserState = {
  listOfusers: [],
  newUser: [],
  message: '',
}
