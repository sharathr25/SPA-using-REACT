function showAuthors(authors, action) {
    return authors.concat(action.payload);
}

function deleteAuthor(authors, action) {
    return authors.filter((author) => {
        return author.id !== action.payload;
    });
}

function updateAuthor(authors,action) {
    const index = action.payload.index;
    const author = action.payload.author;
    const firstPart = authors.slice(0,index);
    const secondePart = authors.slice(index);
    return [...firstPart,author,...secondePart]
}

export default function (authors=[], action) {
    switch (action.type) {
        case 'SHOW_AUTHORS':return showAuthors(authors, action);
        case 'ADD_AUTHOR':return authors.concat(action.payload);
        case 'DELETE_AUTHOR':return deleteAuthor(authors,action);
        case 'UPDATE_AUTHOR':return updateAuthor(authors,action);
        default:;
    }
    return authors;
}

