import React from "react";
import { Grid } from "@mui/material";

export const Torch = () => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          height: "100%",
          bottom: { xs: "-50%", sm: "-30%" },
          width: "800px",
          height: "800px",
          animation: "rotation 8s infinite linear",
          transformOrigin: "center",
        }}
      >
        <Grid
          className="demo"
          sx={{ transform: "rotate(-51.42deg)", transformOrigin: "bottom" }}
        ></Grid>
        <Grid
          className="demo"
          sx={{ transform: "rotate(-102.85deg)", transformOrigin: "bottom" }}
        ></Grid>
        <Grid
          className="demo"
          sx={{ transform: "rotate(-154.27deg)", transformOrigin: "bottom" }}
        ></Grid>
        <Grid
          className="demo"
          sx={{
            transform: "rotate(51deg)",
            transformOrigin: "bottom",
            animation: "torch 5s infinite linear",
          }}
        ></Grid>
        <Grid
          className="demo"
          sx={{ transform: "rotate(102.85deg)", transformOrigin: "bottom" }}
        ></Grid>
        <Grid
          className="demo"
          sx={{ transform: "rotate(154.27deg)", transformOrigin: "bottom" }}
        ></Grid>
        <Grid
          className="demo"
          sx={{
            transformOrigin: "bottom",
            animation: "torch1 5s infinite linear",
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};
