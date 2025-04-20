import initialStateFeatures from "../base/translation-texts/Features-en";

const initialState = {
    featuresEn: initialStateFeatures
}
const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return {
                ...state,
            };
        }
    }
}

export default LanguageReducer;

export const getFeaturesEnSelector = (state) => state.languageReducer.featuresEn;
