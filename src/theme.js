import { createTheme } from "@mui/material";
import { Background } from "./assets/images/index.js";

const theme = createTheme({
    components: {
        MuiCssBaseline:{
            styleOverrides:{
                body: {
                    background: `url(${Background})`,
                    padding:0,
                    margin:0
                  },
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    color:"#fff"
                }
            }
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    display:'list-item',
                    paddingTop:0,
                    paddingBottom:0
                }
            }
        }
    }
});
export default theme;