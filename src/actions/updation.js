// import {SHOW_POP_UP_MESSAGE,HIDE_POP_UP_MESSAGE} from '../config/constants';
export const setBookUpdated = (msg) => {
    const data = { bookUpdated: true, authorUpdated: false};
    return {
        type: 'BOOK_UPDATED',
        payload:data
    }
}

export const setAuthorUpdated = () => {
    const data = { bookUpdated: false, authorUpdated: true};
    return {
        type: 'AUTHOR_UPDATED',
        payload:data
    }
}
