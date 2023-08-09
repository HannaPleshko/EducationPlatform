import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi, courseApi } from '@services';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat([userApi.middleware, courseApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
