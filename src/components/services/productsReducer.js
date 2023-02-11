
import { GETPRODUCTS, CREATEPRODUCT, GETPRODUCT, UPDATEPRODUCT, DELETEPRODUCT } from "./productsActions"

const productsReducer = (state, action) => {
  switch(action.type){
    case GETPRODUCTS:
      return state = {...state, products: action.payload}
      break;
    case CREATEPRODUCT:
      return  state.products = action.payload
      break;
  }
}

export default productsReducer
