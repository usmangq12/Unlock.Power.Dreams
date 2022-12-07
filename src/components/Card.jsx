import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  Card as MuiCard,
} from "@mui/material";
import { Bulb, Plane } from "../assets/images";
import { Img } from "../shared/Img";

export const Card = () => {
  return (
    <Grid container item justifyContent={"center"}>
      <Grid sx={{ px: { xs: 2.5, sm: 0 }, width: 425, maxWidth: "100%" }}>
        <MuiCard
          sx={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.39) -213.5%, rgba(255, 255, 255, 0) 100%)",
            boxShadow:
              "inset 0px -1px 11px rgba(255, 255, 255, 0.17), inset 0px 2px 0px rgba(255, 255, 255, 0.24)",
            borderRadius: 2,
            py: 3,
            px: { xs: 2, sm: 3.5 },
            textAlign: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              component="img"
              src={Plane}
              sx={{ width: "16px", maxWidth: "100%", marginRight: "5px" }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Inter",
              }}
            >
              How To Play
            </Typography>
          </Grid>
          <List
            component="ol"
            sx={{
              pr: { xs: 0, sm: 2 },
              pl: 2,
              pt: 1.5,
              listStyle: "decimal",
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: "400",
              color: "#fff",
            }}
          >
            <ListItem sx={{ px: { xs: 0, sm: 2 } }}>
              Guess the right combination of numbers
            </ListItem>
            <ListItem sx={{ px: { xs: 0, sm: 2 } }}>
              Win{" "}
              <Typography variant="subtile2" sx={{ fontWeight: "bold" }}>
                N3,000,000
              </Typography>{" "}
              instantly
            </ListItem>
          </List>
          <Typography
            variant="subtitle2"
            sx={{ fontFamily: "Inter", py: 1, textAlign: "start" }}
          >
            Sounds unbelievable? Well, guess right & see for yourself!
          </Typography>
          <MuiCard
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.3)",
              borderRadius: 1,
              p: 1.25,
              display: "flex",
            }}
          >
            <Img
              component="img"
              sx={{ maxWidth: "100%", width: 20, height: 28, mr: 0.5 }}
              image={Bulb}
              alt=""
            />
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                textAlign: "start",
                fontSize: 12,
              }}
            >
              Think well before you guess. You have only{" "}
              <Typography variant="subtile2" sx={{ fontWeight: "bold" }}>
                2
              </Typography>{" "}
              attempts per day and even after you wi, you can come back the next
              day to try for another jackpot!
            </Typography>
          </MuiCard>
        </MuiCard>
      </Grid>
    </Grid>
  );
};
