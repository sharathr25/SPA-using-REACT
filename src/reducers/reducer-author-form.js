export default function(state={showForm: false, updateBook: false}, action) {
    switch (action.type) {
        case 'SHOW_AUTHOR_FORM':return action.payload;
        case 'HIDE_AUTHOR_FORM':return action.payload;
        default:return state;
    }
} 