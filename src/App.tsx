import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import ChatAppLayout from './layouts/ChatAppLayout';
import UserProvider from "./providers/UserProvider";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <>
          <ChatAppLayout />
        </>
      </ThemeProvider>
    </UserProvider>
  );
}
