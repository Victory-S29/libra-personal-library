export const CHANGE_LOGIN_ACTION = "CHANGE_LOGIN_ACTION";
export const ADD_NEW_USER_ACTION = "ADD_NEW_USER_ACTION";
export const ADD_CURRENT_USER_ACTION = "ADD_CURRENT_USER_ACTION";
export const CHANGE_USER_ACTION = "CHANGE_USER_ACTION";
export const DELETE_USER_ACTION = "DELETE_USER_ACTION";

export const changeLoginAction = (isLogin) => {
    return {
        type: CHANGE_LOGIN_ACTION,
        payload: {
            isLogin
        }
    };
};

export const addNewUserAction = (newUser) => {
    return {
        type: ADD_NEW_USER_ACTION,
        payload: {
            newUser
        }
    };
};

export const addCurrentUserAction = (id) => {
    return {
        type: ADD_CURRENT_USER_ACTION,
        payload: {
            id
        }
    };
};

export const changeUserAction = (changedUser) => {
    return {
        type: CHANGE_USER_ACTION,
        payload: {
            changedUser
        }
    };
};

export const deleteUserAction = (id) => {
    return {
        type: DELETE_USER_ACTION,
        payload: {
            id
        }
    };
};