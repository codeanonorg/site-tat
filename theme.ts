import * as colors from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: colors.deepOrange,
    secondary: colors.purple,
    error: colors.red,
    background: { default: "white", paper: "#BCD" }
  }
});
export default theme;
