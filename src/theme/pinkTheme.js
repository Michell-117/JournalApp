import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
const pinkTheme = createTheme({
    palette: {
      primary: {
        main: '#a380a8',
      },
      secondary: {
        main: '#4d374f',
      },
      error: {
        main: red.A400,
      },
    },
  });
  
  export default pinkTheme;