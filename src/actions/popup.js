import {SHOW_POP_UP_MESSAGE,HIDE_POP_UP_MESSAGE} from '../config/constants';
export const showPopUpMessage = (msg) => {
    const data = { showPopUpMessage: true, message:msg};
    return {
        type: SHOW_POP_UP_MESSAGE,
        payload:data
    }
}

export const hidePopUpMessage = () => {
    const data = { showPopUpMessage: false, message: ''};
    return {
        type: HIDE_POP_UP_MESSAGE,
        payload:data
    }
}
