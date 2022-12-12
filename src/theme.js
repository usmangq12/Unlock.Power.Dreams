import { createTheme } from "@mui/material";
import { Background } from "./assets/images/index.js";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `url(${Background})`,
          padding: 0,
          margin: 0,

          //   "@media (prefers-reduced-motion: no-preference) ": {
          //     "& .App-logo": {
          //       animation: "App-logo-spin infinite 20s linear",
          //     },
          //   },
          "& .demo": {
            background:
              "linear-gradient(1.87deg,rgba(255, 229, 0, 0.5) -1.18%,rgba(255, 230, 9, 0.435) 3.33%,rgba(255, 231, 23, 0.335) 10.55%,rgba(255, 233, 36, 0.245) 17.77%,rgba(255, 234, 47, 0.17) 25.89%,rgba(255, 234, 56, 0.11) 34.01%, rgba(255, 235, 62, 0.06) 42.13%,  rgba(255, 236, 67, 0.025) 51.15%,     rgba(255, 236, 70, 0.005) 60.17%,rgba(255, 236, 71, 0) 71.89% )",
            clipPath: "polygon(0 0, 100% 0, 28% 139%, 77% 210%)",
            width: " 317px",
            height: "800px",
            position: "absolute",
            top: "-50%",
            left: " 30%",
            padding: "1rem",
          },
          "@keyframes spin": {
            "0%": {
              transform: " rotate(0deg)",
            },

            "100%": {
              transform: " rotate(360deg)",
            },
          },
          " @keyframes App-logo-spin": {
            from: {
              transform: " rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },

          "@keyframes rotation": {
            from: {
              WebkitTransform: "rotate(0deg)",
            },
            to: {
              WebkitTransform: "rotate(-359deg)",
            },
          },
          "@keyframes rotate ": {
            from: {
              WebkitTransform: "rotate(-180deg)",
            },
            to: {
              WebkitTransform: "rotate(-549deg)",
            },
          },
          "@keyframes coins": {
            "50%": {
              transform: "translateY(30px)",
            },
          },
          "@keyframes coin": {
            "  from": {
              transform: "translateY(160px)",
            },
            to: {
              transform: "translateY(0px)",
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "list-item",
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
  },
});
export default theme;
