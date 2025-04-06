const initialState = {
    isLogin: false,
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return {
                ...state,
            };
        }
    }
}

export default UserReducer;

export const getIsLoginSelector = (state) => state.userReducer.isLogin;