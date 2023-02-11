
import { GETALL, CREATE, GETONE, UPDATE, DELETE } from "../productsActions"

export const productsReducer = (state, action) => {
  switch(action.type){
    case GETALL:
      return state = {...state, listOfProducts: action.payload}
      break;
    case CREATE || UPDATE:
      return  state = {...state, listOfProducts: [...listOfProducts, action.payload] }
      break;
    case GETONE:
      return {...state, currentProduct: action.payload}
      break
    case DELETE:
      return {...state, message: action.payload}
      break;
    default: return state
  }
}

export const initialproductState = {
  listOfProducts: [],
  currentProduct: [],
  message: '',
}
