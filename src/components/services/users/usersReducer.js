
import { GETALL, CREATE, GETONE, UPDATE, DELETE } from "../productsActions"

export const productsReducer = (state, action) => {
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

export const initialproductState = {
  listOfusers: [],
  newUser: [],
  message: '',
}
