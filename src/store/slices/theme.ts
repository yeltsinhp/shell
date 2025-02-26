import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
const initialState = {
  theme: savedTheme || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
