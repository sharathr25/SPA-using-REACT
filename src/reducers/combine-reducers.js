import {combineReducers} from 'redux';
import Books from './reducer-books';
import Authors from './reducer-authors';
import BookForm from './reducer-book-form';
import AuthorForm from './reducer-author-form';

const allReducers = combineReducers({
    booksFromStore: Books,
    authorsFromStore: Authors,
    bookFormFromStore: BookForm,
    authorFormFormStore: AuthorForm
});

export default allReducers;