import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi, courseApi, lessonApi } from '@services';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [lessonApi.reducerPath]: lessonApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat([userApi.middleware, courseApi.middleware, lessonApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
