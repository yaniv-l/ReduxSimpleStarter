import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// Any key that will be returned by the combineReducers will end up as a key in the app gloabl state
const rootReducer = combineReducers({
  //This reducer will add a keys named books and activebook to the gloabal application state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
