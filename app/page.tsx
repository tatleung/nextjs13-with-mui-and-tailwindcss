"use client";

// import styles from "./page.module.css";
import { Button, Grid, Stack } from "@mui/material";
// import { Container } from "@mui/system";

export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center">
      <Stack direction="row">
        <Button variant="text" style={{ margin: "4px" }}>
          Text
        </Button>
        <Button variant="contained" style={{ margin: "4px" }}>
          Contained
        </Button>
        <Button variant="outlined" style={{ margin: "4px" }}>
          Outlined
        </Button>
      </Stack>
    </Grid>
  );
}