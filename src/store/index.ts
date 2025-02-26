import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import userReducer from "./slices/user"; // Importamos el reducer del usuario

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer, // Agregamos el usuario al store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
