// // authReducer.js
// const initialState = {
//     isAuthenticated: false,
//   };
  
//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'LOGIN':
//       case 'SIGN_UP':
//         return {
//           ...state,
//           isAuthenticated: true,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;
  


// authReducer.js
const initialState = {
  isAuthenticated: false,
  userName: '', // Add userName in the initial state
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN':
      case 'SIGN_UP':
          return {
              ...state,
              isAuthenticated: true,
              userName: action.payload.username, // Set the userName from the action payload
          };
      default:
          return state;
  }
};

export default authReducer;
