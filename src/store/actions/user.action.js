export const CHANGE_LOGIN_ACTION = "CHANGE_LOGIN_ACTION";

export const changeLoginAction = (isLogin) => {
    return {
        type: CHANGE_LOGIN_ACTION,
        payload: {
            isLogin
        }
    };
};
