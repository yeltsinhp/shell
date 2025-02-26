import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string | null;
}

const initialState: UserState = {
  username: localStorage.getItem("username"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload); 
    },
    logoutUser: (state) => {
      state.username = null;
      localStorage.removeItem("username"); 
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
