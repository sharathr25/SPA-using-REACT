import urls from '../../config/urls';

export const showBookForm = () => {
    const data = { showForm: true, update: false };
    return {
        type: 'SHOW_BOOK_FORM',
        payload:data
    }
}

export const showUpdateForm = (book) => {
    const data = { showForm: true, update: true , book: book};
    return {
        type: 'SHOW_BOOK_FORM',
        payload:data
    }
}

export const showBooks = () => {
    return async dispatch => {
        const url = urls.bookurl;
        let dbData;
        try {
            const responce = await fetch(url, {mode: 'cors'});
            dbData = await responce.json(); 
            dispatch({
                type:'SHOW_BOOKS',
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
        type: 'HIDE_BOOK_FORM',
        payload: data
    };
}

export const addBook = (book) => {
    return async dispatch => {
        const url = urls.bookAddUrl;
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
                type:'ADD_BOOK',
                payload:book
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}

export const deleteBook = (isbn) => {
    return async dispatch => {
        const url = urls.bookDeleteUrl+`/${isbn}`;
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
                type: 'DELETE_BOOK',
                payload: isbn
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}

export const updateBook = (book) => {
    return async dispatch => {
        const url = urls.bookUpdateUrl+`/${book.isbn}`;
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
                type:'UPDATE_BOOK',
                payload:book
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}