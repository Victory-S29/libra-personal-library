import { CHANGE_LOGIN_ACTION } from "../actions/user.action";

const initialState = {
    isLogin: false,
    users: [{
        email: "viktoriia.sanina.2917@gmail.com",
        username: "Viktoriia",
        password: "12345678"
    }]
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_ACTION: {
            return {
                ...state,
                isLogin: action.payload.isLogin
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default UserReducer;

export const getIsLoginSelector = (state) => state.userReducer.isLogin;
export const getUsersSelector = (state) => state.userReducer.users;