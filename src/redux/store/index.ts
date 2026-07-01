import { configureStore, combineReducers } from '@reduxjs/toolkit';
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

import loginReducer from '@/redux/slices/loginSlice';
import productReducer from '@/redux/slices/productSlice';
import cartReducer from '@/redux/slices/cartSlice';
import addressReducer from '@/redux/slices/addressSlice';
import paymentReducer from '@/redux/slices/paymentOptionsSlice';
import orderReducer from '@/redux/slices/orderSlice';
import { secureStorage } from '@/utils/secureStorage';

const persistConfig = {
  key: 'root',
  storage: secureStorage,
  whitelist: ['login'],
};

const rootReducer = combineReducers({
  login: loginReducer,
  product: productReducer,
  cart: cartReducer,
  address: addressReducer,
  payment: paymentReducer,
  orders: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
