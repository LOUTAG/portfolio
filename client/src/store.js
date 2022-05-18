import { configureStore } from '@reduxjs/toolkit';

import languageReducer from './reducers/languageReducer';

const store = configureStore({
    reducer: {
        languageActif: languageReducer
    }
})

export default store;