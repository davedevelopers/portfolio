import React from "react";
import Main from "./components/Main";
import SimpleTabs from "./components/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main />
        <SimpleTabs />
      </ThemeProvider>
    </>
  );
}

export default App;
