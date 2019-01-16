import urls from '../../config/urls';
import {SHOW_BOOKS,ADD_BOOK,DELETE_BOOK,UPDATE_BOOK,SHOW_BOOK_FORM,HIDE_BOOK_FORM} from '../../config/constants';

export const showBookForm = () => {
    const book = {
        isbn: 0,
        title: '',
        subtitle: '',
        publisher: '',
        description: '',
        pages: 0,
    };
    const data = { showForm: true, update: false ,book : book};
    return {
        type: SHOW_BOOK_FORM,
        payload:data
    }
}

export const showUpdateForm = (book) => {
    const data = { showForm: true, update: true , book: book};
    return {
        type: SHOW_BOOK_FORM,
        payload:data
    }
}

export const showBooks = () => {
    return async dispatch => {
        const url = urls.bookUrl;
        let dbData;
        try {
            const responce = await fetch(url, {mode: 'cors'});
            dbData = await responce.json(); 
            dispatch({
                type:SHOW_BOOKS,
                payload:dbData
            });
        } catch (error) {
            console.log('error happend');
        }
    }
}
export const hideBookForm = () => {
    const data = {showForm: false, update: false};
    return {
        type: HIDE_BOOK_FORM,
        payload: data
    };
}

export const addBook = (book) => {
    return async dispatch => {
        const url = urls.bookUrl;
        console.log(url);
        try {
            const responce = await fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(book)
            });
            console.log(responce); 
            dispatch({
                type:ADD_BOOK,
                payload:book
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}

export const deleteBook = (isbn) => {
    return async dispatch => {
        const url = urls.bookUrl+`/${isbn}`;
        console.log(url);
        try {
            const responce = await fetch(url, {
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
            });
            console.log(responce.text); 
            dispatch({
                type: DELETE_BOOK,
                payload: isbn
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}

export const updateBook = (book, index) => {
    const data = {book, index};
    return async dispatch => {
        const url = urls.bookUrl+`/${book.isbn}`;
        console.log(url);
        try {
            const responce = await fetch(url, {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(book)
            });
            console.log(responce);
            dispatch({
                type:DELETE_BOOK,
                payload:book.isbn
            });
            dispatch({
                type:UPDATE_BOOK,
                payload:data
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}
