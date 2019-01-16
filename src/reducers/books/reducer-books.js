function showBooks(books,action){
    return books.concat(action.payload);
}

function addBook(books, action) {
    return books.concat(action.payload);
}

function deleteBook(books,action) {
    return books.filter((book) => {
        return book.isbn !== action.payload;
    })
}

function updateBook(books, action) {
    const index = action.payload.index;
    const book = action.payload.book;
    const firstPart = books.slice(0,index);
    const secondePart = books.slice(index);
    return [...firstPart,book,...secondePart];
}

export default function(books=[],action) {
    switch (action.type) {
        case 'SHOW_BOOKS': return showBooks(books,action);
        case 'ADD_BOOK':return addBook(books,action);
        case 'DELETE_BOOK': return deleteBook(books,action);
        case 'UPDATE_BOOK': return updateBook(books, action);
        default:;
    }
    return books;
} 