import React from "react";
import { Grid, Typography, Button, Divider } from "@mui/material";
import { whiteStar, greenStar, blueStar, yellowStar } from "../assets/images";
import { Card } from "../components/Card";
import { Img } from "../shared/Img";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Details = () => {
  return (
    <Grid container item justifyContent={"center"} mt={"57px"}>
      <Grid
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "75%" },
        }}
      >
        <Typography
          align="center"
          variant="h2"
          sx={{
            display: { xs: "block", sm: "flex" },
            flexDirection: "column",
            lineHeight: "0.9",
            fontFamily: "Poppins",
            fontSize: { xs: "2.5rem", sm: "3.7rem" },
          }}
        >
          Unlock to
          <Typography
            variant="subtile2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", sm: "4.375rem" },
              ml: { xs: 1, sm: 0 },
            }}
          >
            Power your dreams!
          </Typography>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            fontSize: { xs: "16px", sm: "29.4px" },
            fontFamily: "Inter",
            lineHeight: "1.2",
            my: 3,
          }}
        >
          Stand a chance to win
          <Divider
            component="br"
            sx={{ display: { xs: "none", sm: "block" } }}
          />
          <Typography variant="subtile2" sx={{ fontWeight: "bold", mx: 1 }}>
            N3,000,000
          </Typography>
          <Divider
            component="br"
            sx={{ display: { xs: "block", sm: "none" } }}
          />
          everyday for the next 5 days
        </Typography>
        <Img
          component="img"
          src={whiteStar}
          alt=""
          sx={{
            position: "absolute",
            top: { xs: "-7px", sm: "20px" },
            right: { xs: 0, sm: "175px" },
          }}
        ></Img>
        <Img
          component="img"
          src={yellowStar}
          sx={{
            position: "absolute",
            top: { xs: "87%", sm: "48%" },
            right: { xs: "5.5%", sm: "33.7%" },
          }}
        ></Img>
        <Img
          component="img"
          src={blueStar}
          sx={{
            position: "absolute",
            bottom: { xs: "-35px", sm: "32px" },
            left: { xs: "0", sm: "31%" },
            zIndex: "-1",
          }}
        ></Img>
        <Img
          component="img"
          src={greenStar}
          sx={{ position: "absolute", top: 0, left: { xs: 0, sm: "12%" } }}
        ></Img>
      </Grid>
      <Card />
      <Grid sx={{ my: 8 }}>
        <Button
          disableRipple="false"
          sx={{
            bgcolor: "#ECAB03",
            color: "#fff",
            fontFamily: "Inter",
            p: "19px 20px 19px 46px",
            fontSize: "14px",
            borderRadius: "4px",
            lineHeight: "17px",
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: "#ECAB03",
            },
          }}
        >
          Play The Game
          <ChevronRightIcon sx={{ ml: 3 }} />
        </Button>
      </Grid>
    </Grid>
  );
};
