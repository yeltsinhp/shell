import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string | null;
}

// Carga el usuario desde localStorage si existe
const initialState: UserState = {
  username: localStorage.getItem("username"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload); // Guarda en localStorage
    },
    logoutUser: (state) => {
      state.username = null;
      localStorage.removeItem("username"); // Elimina del localStorage
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
