export const lightTheme = {
  background: `#f5f5f5 url('/light.jpg') no-repeat center`,
  text: "#333",
  button: "#1A73E8",
  modalBackground: "rgba(255, 255, 255, 0.95)", 
};

export const darkTheme = {
  background: `#212121 url('/dark.jpg') no-repeat center`,
  text: "#fff",
  button: "#FF5722",
  modalBackground: "rgba(50, 50, 50, 0.95)",
};

export type ThemeType = typeof lightTheme;
