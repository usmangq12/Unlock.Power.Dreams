import React from "react";
import { Grid } from "@mui/material";
import { Animation } from "../components/Animation";
import { Navbar } from "../components/Navbar";
import { Details } from "../components/Details";
import { Torch } from "../components/Torch";

export const Home = () => {
  return (
    <Grid container pt={5.5} position={"relative"} overflow={"hidden"}>
      <Torch />
      <Navbar />
      <Details />
      <Animation />
    </Grid>
  );
};
