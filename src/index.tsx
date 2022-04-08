import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { peepTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={peepTheme}>
      <CssBaseline />

      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
