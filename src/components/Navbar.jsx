import React from "react";
import { Grid, Typography } from "@mui/material";
import { Logo } from "../assets/images";
import TodayIcon from "@mui/icons-material/Today";

export const Navbar = () => {
  return (
    <Grid container item>
      <Grid
        container
        px={{ xs: 2.4, sm: 13 }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid sx={{ width: 40 }}>
          <img src={Logo} alt="" style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid sx={{ display: "flex" }}>
          <Grid
            sx={{
              p: 0.5,
              width: 40,
              height: 40,
              borderRadius: 2,
              bgcolor: " rgba(255, 255, 255, 0.1)",
            }}
          >
            <TodayIcon
              sx={{
                color: "#fff",
                bgcolor: "#9B51E0",
                p: 0.75,
                borderRadius: 2,
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid sx={{ ml: 1.25 }}>
            <Typography variant="h6" sx={{ lineHeight: "1" }}>
              Day 1
            </Typography>
            <Typography variant="subtile2" color="rgba(255, 255, 255, 0.6)">
              of 5
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
