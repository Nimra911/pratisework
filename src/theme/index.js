import { createTheme } from "@material-ui/core";
import arr from "./fontConfig";
const theme = createTheme({
 
  typography: {
    fontFamily: ["Poppins"].join(","),
    "@App": {
      "@font-face": arr,
    },
  },

});

export default theme;
