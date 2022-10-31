"use client";

import { Button, Grid, Stack } from "@mui/material";

export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center">
      <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  );
}
