import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid container>
      {loading ? (
        <Grid
          sx={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Grid
            sx={{
              border: " 16px solid #e3e3e3",
              borderTop: "16px solid #ecab03",
              borderRadius: " 50%",
              width: "70px",
              height: "70px",
              animation: "spin 1s linear infinite",
            }}
          ></Grid>
        </Grid>
      ) : (
        <Home />
      )}
    </Grid>
  );
}
export default App;
