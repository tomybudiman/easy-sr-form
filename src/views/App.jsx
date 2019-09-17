import React from "react";

import "./App.scss";
import Form from "./Form";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#42a5f4"
      }
    }
  });

  return(
    <MuiThemeProvider theme={theme}>
      <Form/>
    </MuiThemeProvider>
  )
};

export default App