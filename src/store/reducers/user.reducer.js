import { ADD_CURRENT_USER_ACTION, ADD_NEW_USER_ACTION, CHANGE_LOGIN_ACTION, CHANGE_USER_ACTION, DELETE_USER_ACTION } from "../actions/user.action";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    isLogin: false,
    users: [{
        id: uuidv4(),
        email: "viktoriia.sanina.2917@gmail.com",
        username: "Viktoriia",
        password: "12345678"
    }],
    currentUser: {}
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
        case ADD_CURRENT_USER_ACTION: {
            const { id } = action.payload;
            const foundUser = state.users.find(user => user.id === id);
            return {
                ...state,
                currentUser: foundUser || {}
            };
        }
        case CHANGE_USER_ACTION: {
            const { changedUser } = action.payload;
            const updatedUsers = state.users.map(user =>
                user.id === changedUser.id ? changedUser : user
            );

            return {
                ...state,
                users: updatedUsers,
                currentUser: changedUser
            };
        }
        case DELETE_USER_ACTION: {
            const { id } = action.payload
            return {
                ...state,
                users: state.users.filter(user => user.id !== id),
                currentUser: null,
                isLogin: false
            };
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
export const getCurrentUserSelector = (state) => state.userReducer.currentUser;