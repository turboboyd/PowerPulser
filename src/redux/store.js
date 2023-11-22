import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { avatarReducer } from './avatar/avatarSlice';
import { diaryReducer } from './diary/diarySlice';
import { exercisesReducer } from './exercises/exercisesSlice';
import { productsReducer } from './products/productsSlice';
import { statisticsReducer } from './statistics/statisticsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    statistics: statisticsReducer,
    products: productsReducer,
    exercises: exercisesReducer,
    diary: diaryReducer,
    avatar: avatarReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
