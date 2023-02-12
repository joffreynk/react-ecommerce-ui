export const productsReducer = (state, action) => {
    switch(action.type){
      case GETALL:
        return state = {...state, listOfusers: action.payload}
        break;
      case CREATE || UPDATE:
      default: return state
    }
  }
  
  export const initialUserState = {
    listOfusers: [],
    newUser: [],
    message: '',
  }