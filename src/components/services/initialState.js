export const userInitialState = {
  products: [],
  orders: [],
  reviews: [],
  token: {isAdmin: true}
}
  
export  const adminInitialState = {
  ...userInitialState,
  users: []
}