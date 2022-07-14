import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  Card,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";
import {
  Logo,
  Bulb,
  Coin,
  Torch,
  Plane,
  coinLeft,
  coinRight,
  whiteStar,
  greenStar,
  blueStar,
  yellowStar,
} from "../assets/images";
import TodayIcon from "@mui/icons-material/Today";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/material/styles";

const Img = styled(CardMedia)(({ theme }) => ({
  maxWidth: "100%",
  width: "unset",
}));

export const Game = () => {
  return (
    <Grid
      container
      pt={5.5}
      position={"relative"}
      overflow={"hidden"}
      sx={{
        "&:before, &:after": {
          position: "absolute",
          content: '""',
          width: "100%",
          height: "100%",
          background: `url(${Torch})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: "-1",
          transformOrigin: "center bottom",
        },
        "&:before": {
          animation: "rotation 5s infinite linear",
        },
        "&:after": {
          animation: "rotate 5s infinite linear",
        },
      }}
    >
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
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        mt={6.75}
        maxWidth={"1440px"}
        mx={"auto"}
      >
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
              right: 0,
            }}
          ></Img>
          <Img
            component="img"
            src={yellowStar}
            sx={{
              position: "absolute",
              top: { xs: "87%", sm: "47%" },
              right: { xs: "5.5%", sm: "28.5%" },
            }}
          ></Img>
          <Img
            component="img"
            src={blueStar}
            sx={{
              position: "absolute",
              bottom: { xs: "-35px", sm: "32px" },
              left: { xs: "0", sm: "25%" },
              zIndex: "-1",
            }}
          ></Img>
          <Img
            component="img"
            src={greenStar}
            sx={{ position: "absolute", top: 0, left: 0 }}
          ></Img>
        </Grid>

        <Grid sx={{ px: { xs: 2.5, sm: 0 }, width: 425, maxWidth: "100%" }}>
          <Card
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
            <Card
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.3)",
                borderRadius: 1,
                p: 1.25,
                display: "flex",
              }}
            >
              <CardMedia
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
                attempts per day and even after you wi, you can come back the
                next day to try for another jackpot!
              </Typography>
            </Card>
          </Card>
        </Grid>
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
        <Grid
          sx={{
            lineHeight: 0,
            position: "relative",
            top: { xs: "14px", sm: "60px" },
            animation: "coin 1s linear",
          }}
        >
          <img src={Coin} alt="" style={{ maxWidth: "100%" }} />
          <Grid
            sx={{
              position: "absolute",
              top: { xs: "-68%", sm: "-28%" },
              left: { xs: "-14%", sm: "8%" },
              transform: "translateY(10px)",
              animation: "coins 3s infinite linear",
            }}
          >
            <img
              src={coinLeft}
              alt=""
              style={{
                width: "105px",
                height: "120px",
                maxWidth: "100%",
              }}
            />
          </Grid>
          <Grid
            sx={{
              position: "absolute",
              top: "34px",
              right: 0,
              transform: "translateY(10px)",
              animation: "coins 3s infinite linear",
            }}
          >
            <img
              src={coinRight}
              alt=""
              style={{ width: "85px", height: "98px", maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
