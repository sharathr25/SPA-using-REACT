function showAuthors(state, action) {
    return {...state, authors: action.payload};
}

function deleteAuthor(state, action) {
    return {...state, authors:state.authors.filter((author) => {
        return author.id !== action.payload;
    })
    }
}

function updateAuthor(state,action) {
    state = {...state, authors:state.authors.map((author, index) => {
        return author.id === action.payload.id ? action.payload : author;
    })}
    return state;
}

export default function (state={authors:[]}, action) {
    switch (action.type) {
        case 'SHOW_AUTHORS':return showAuthors(state, action);
        case 'ADD_AUTHOR':return {...state, authors:state.authors.concat(action.payload)};
        case 'DELETE_AUTHOR':return deleteAuthor(state,action);
        case 'UPDATE_AUTHOR':return updateAuthor(state,action);
        default:;
    }
    return state;
}

