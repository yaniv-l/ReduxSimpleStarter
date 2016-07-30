// State is not the application state, only the state this reducer is responsible for
// state = null - an ES6 syntx. This is a default value to cover the app loading in which state is not defined. redux does not allow returnnig an undeifined value, which is the case of app loading, so we defaul to null.
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;

  }
  return state;
}
