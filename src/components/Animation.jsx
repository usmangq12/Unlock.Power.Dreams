import { Grid } from "@mui/material";
import {
  Coin,
  coinLeft,
  coinRight,
  whiteStar,
  yellowStar,
} from "../assets/images";
import { Img } from "../shared/Img";

export const Animation = () => {
  return (
    <Grid container item justifyContent={"center"}>
      <Grid
        sx={{
          lineHeight: 0,
          position: "relative",
          animation: "coin 1s linear",
        }}
      >
        <Img component="img" src={Coin} alt="" />
        <Img
          component="img"
          src={whiteStar}
          alt=""
          sx={{
            position: "absolute",
            top: { xs: "20px", sm: "-70px" },
            left: 0,
          }}
        ></Img>
        <Img
          component="img"
          src={yellowStar}
          sx={{
            position: "absolute",
            bottom: 40,
            left: 0,
          }}
        ></Img>
        <Grid
          sx={{
            position: "absolute",
            top: { xs: "-68%", sm: "-28%" },
            left: { xs: "-14%", sm: "8%" },
            transform: "translateY(10px)",
            animation: "coins 3s infinite linear",
          }}
        >
          <Img
            component="img"
            src={coinLeft}
            alt=""
            sx={{
              width: "105px",
              height: "120px",
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
          <Img
            component="img"
            src={coinRight}
            alt=""
            sx={{ width: "85px", height: "98px" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
