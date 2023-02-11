
import { GETPRODUCTS, CREATEPRODUCT, GETPRODUCT, UPDATEPRODUCT, DELETEPRODUCT } from "./productsActions"


const productsReducer = async(state, action) => {

  const URL = 'http://localhost:3000/products';

  switch(action.type){
    case GETPRODUCTS:
      try{
        const products = await fetch(URL, action.headers)
        return state.products = products
        break;
      } catch(err) {
        return state.products = err
        break;
      }
      break;
    case CREATEPRODUCT:
      try{
        const products = await fetch(URL, action.headers)
        return state.products = products
        break;
      } catch(err) {
        return state.products = err
        break;
      }
      break;


  }


}

// const products = 
