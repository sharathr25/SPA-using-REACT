function showBooks(state,action){
    return {...state, books: action.payload}
}

function addBook(state, action) {
    return {...state, books:state.books.concat(action.payload)};
}

function deleteBook(state,action) {
    state={...state, books:state.books.filter((book) => {
        return book.isbn !== action.payload;
        }) 
    }
    return state;
}

function updateBook(state, action) {
    state = {...state, books:state.books.filter((book) => {
        return book.isbn !== action.payload.isbn;
    })}
    state = {...state, books:state.books.concat(action.payload)};
    return state;
}

export default function(state={books:[]},action) {
    switch (action.type) {
        case 'SHOW_BOOKS': return showBooks(state,action);
        case 'ADD_BOOK':return addBook(state,action);
        case 'DELETE_BOOK': return deleteBook(state,action);
        case 'UPDATE_BOOK': return updateBook(state, action);
        default:;
    }
    return state;
} 