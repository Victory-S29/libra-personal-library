import { ADD_NEW_USER_ACTION, CHANGE_LOGIN_ACTION } from "../actions/user.action";

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
        case ADD_NEW_USER_ACTION: {
            const { newUser } = action.payload;
            return {
                ...state,
                users: [...state.users, newUser]
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