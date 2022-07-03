import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import DateAdapter from "@mui/lab/AdapterLuxon";
import { LocalizationProvider } from "@mui/lab";
import React from "react";
import ReactDOM from "react-dom";
import { peepTheme } from "./theme";

import CustomLuxonUtils from "./utils";

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={CustomLuxonUtils}>
      <ThemeProvider theme={peepTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
