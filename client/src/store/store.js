import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/user';

const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
            userApi.middleware,
        ]),
});

setupListeners(store.dispatch);

export default store


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// const middleware = getDefaultMiddleware({
//   serializableCheck: false, // Disable the serializable state check middleware
// });

// const store = configureStore({
//   reducer:   { [userApi.reducerPath]: userApi.reducer,},
//   middleware,
// });

// export default store;
