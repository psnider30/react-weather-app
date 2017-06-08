const initialState = { routeName: 'currently' };

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGING_ROUTE':
      return action.route;
      
    default: 
      return state;
  }
};