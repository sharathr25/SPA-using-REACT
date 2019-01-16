import {combineReducers} from 'redux';
import Books from './books/reducer-books';
import Authors from './authors/reducer-authors';
import BookForm from './books/reducer-book-form';
import AuthorForm from './authors/reducer-author-form';
import PopUpMessage from './reducer_popup_message';
import Update from './reducer-updation';

const allReducers = combineReducers({
    books: Books,
    authors: Authors,
    bookFormFromStore: BookForm,
    authorFormFormStore: AuthorForm,
    popUpMessage: PopUpMessage,
    update: Update
});

export default allReducers;