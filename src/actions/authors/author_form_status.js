import urls from '../../config/urls';

export const showAuthors = () => {
    return async dispatch => {
        const url = urls.authorurl;
        let dbData;
        try {
            const responce = await fetch(url, {mode: 'cors'});
            dbData = await responce.json(); 
            dispatch({
                type:'SHOW_AUTHORS',
                payload:dbData
            });
        } catch (error) {
            console.log('error happend');
        }
    }
}

export const showAuthorForm = () => {
    const data = { showForm: true, update: false };
    return {
        type: 'SHOW_AUTHOR_FORM',
        payload: data
    };
}

export const showUpdateForm = (author) => {
    const data = { showForm: true, update: true , author: author};
    return {
        type: 'SHOW_AUTHOR_FORM',
        payload: data
    }; 
}

export const hideAuthorForm = () => {
    const data = {showForm: false, update: false};
    return {
        type: 'HIDE_AUTHOR_FORM',
        payload: data
    }
}

export const addAuthor = (author) => {
    return async dispatch => {
        const url = urls.authorAddUrl;
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
                body: JSON.stringify(author)
            });
            console.log(responce); 
            dispatch({
                type: 'ADD_AUTHOR',
                payload: author
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}

export const deleteAuthor = (id) => {
    return async dispatch => {
        const url = urls.authorDeleteUrl+`/${id}`;
        console.log(url);
        try {
            const responce = await fetch(url, {
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                }
            });
            console.log(responce.text); 
            dispatch({
                type: 'DELETE_AUTHOR',
                payload: id
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}

export const updateAuthor = (author) => {
    return async dispatch => {
        const url = urls.authorUpdateUrl+`/${author.id}`;
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
                body: JSON.stringify(author)
            });
            console.log(responce.text); 
            dispatch({
                type: 'UPDATE_AUTHOR',
                payload: author
            });
        } catch (error) {
            console.log('error happend', error);
        }
    }
}

