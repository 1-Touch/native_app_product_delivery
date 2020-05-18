const initialState = {
  isLogged: false,
  isGuest: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
        isGuest: false,
      };
    case 'GUEST_LOGIN':
      return{
        ...state,
        isLogged: false,
        isGuest: true,
      }
    case 'REGISTER':
      return {
        ...state,
        isLogged: true,
        isGuest: false,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogged: false,
        isGuest: false,
      }
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
