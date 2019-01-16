const initialState = {authorUpdated: false, bookUpdated: false}
export default function (state=initialState, action) {
    switch (action.type) {
        case 'BOOK_UPDATED': return action.payload;
        case 'AUTHOR_UPDATED': return action.payload;
        default:;
    }
    return state;
}