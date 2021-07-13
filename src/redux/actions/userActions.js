import {ActionTypes} from "../constants/action-types"

export const logIn = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    };
}