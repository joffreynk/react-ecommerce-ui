export const ECOMERCE_AUTH_TOKEN = 'ECOMERCE_AUTH_TOKEN';

const mytoken = localStorage.getItem(ECOMERCE_AUTH_TOKEN);

export const userInitialState = {
  products: [],
  orders: [],
  reviews: [],
  token: mytoken? mytoken : {isAdmin: true}
}
  
export  const adminInitialState = {
  ...userInitialState,
  users: []
}