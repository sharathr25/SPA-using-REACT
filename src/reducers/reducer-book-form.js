export default function(state={showForm: false, update: false}, action) {
    switch (action.type) {
        case 'SHOW_BOOK_FORM':return action.payload;
        case 'HIDE_BOOK_FORM':return action.payload;
        default:return state;
    }
} 