import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
const pinkTheme = createTheme({
    palette: {
      primary: {
        main: '#a380a8',
      },
      secondary: {
        main: '#5e3461',
      },
      error: {
        main: red.A400,
      },
    },
  });
  
  export default pinkTheme;