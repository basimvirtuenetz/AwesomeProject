export const setUSerData = (Username, email, url) => ({
  type: 'SET_USER_DATA',
  payload: {Username, email, url},
});

const initialState = {
  Username: '',
  email: '',
  ImageUrl: null,
};

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        Username: action.payload.Username,
        email: action.payload.email,
        ImageUrl: action.payload.url,
      };
    default:
      return state;
  }
};
