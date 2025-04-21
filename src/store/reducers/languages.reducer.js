import initialStateDeveloperEn from "../base/translation-texts/Developer-en";
import initialStateFeaturesEn from "../base/translation-texts/Features-en";
import initialStateTechnology from "../base/translation-texts/Technologies-en";

const initialState = {
    featuresEn: initialStateFeaturesEn,
    techEn: initialStateTechnology,
    devEn: initialStateDeveloperEn
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
export const getTechnologiesEnSelector = (state) => state.languageReducer.techEn;
export const getDeveloperEnSelector = (state) => state.languageReducer.devEn;