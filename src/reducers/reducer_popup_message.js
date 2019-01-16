import {SHOW_POP_UP_MESSAGE,HIDE_POP_UP_MESSAGE} from '../config/constants';

const initialState = {showPopUpForm: false , message: ''}
export default function (state=initialState, action) {
    switch (action.type) {
        case SHOW_POP_UP_MESSAGE: return action.payload;
        case HIDE_POP_UP_MESSAGE: return action.payload;
        default:;
    }
    return state;
}