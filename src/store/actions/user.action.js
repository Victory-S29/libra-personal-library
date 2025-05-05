export const CHANGE_LOGIN_ACTION = "CHANGE_LOGIN_ACTION";
export const ADD_NEW_USER_ACTION = "ADD_NEW_USER_ACTION";

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

