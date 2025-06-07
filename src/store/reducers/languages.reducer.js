import { SET_LANGUAGE } from "../actions/languages.action";
import initialStateBannersDe from "../base/translation-texts/de/Banners-de";
import initialStateDeveloperDe from "../base/translation-texts/de/Developer-de";
import initialStateFeaturesDe from "../base/translation-texts/de/Features-de";
import initialStateTechnologyDe from "../base/translation-texts/de/Technologies-de";
import initialStateBannersEn from "../base/translation-texts/en/Banners-en";
import initialStateDeveloperEn from "../base/translation-texts/en/Developer-en";
import initialStateFeaturesEn from "../base/translation-texts/en/Features-en";
import initialStateTechnologyEn from "../base/translation-texts/en/Technologies-en";

const initialState = {
    currentLanguage: "en",
    texts: {
        en: {
            features: initialStateFeaturesEn,
            tech: initialStateTechnologyEn,
            dev: initialStateDeveloperEn,
            banners: initialStateBannersEn
        },
        de: {
            features: initialStateFeaturesDe,
            tech: initialStateTechnologyDe,
            dev: initialStateDeveloperDe,
            banners: initialStateBannersDe
        }
    }
}
const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                currentLanguage: action.payload
            };
        default: {
            return {
                ...state,
            };
        }
    }
}

export default LanguageReducer;

export const getCurrentLanguageSelector = (state) => state.languageReducer.currentLanguage;

export const getBannersSelector = (state) => {
    const lang = getCurrentLanguageSelector(state);
    return state.languageReducer.texts[lang].banners;
};
export const getFeaturesSelector = (state) => {
    const lang = getCurrentLanguageSelector(state);
    return state.languageReducer.texts[lang].features;
};
export const getTechSelector = (state) => {
    const lang = getCurrentLanguageSelector(state);
    return state.languageReducer.texts[lang].tech;
};
export const getDevSelector = (state) => {
    const lang = getCurrentLanguageSelector(state);
    return state.languageReducer.texts[lang].dev;
};