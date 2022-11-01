"use client";

import { Button, Grid, Stack } from "@mui/material";

export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1 className="text-blue-500">Using Material UI with Next.js 13</h1>
      <h4 className="text-red-500">(with Tailwind CSS)</h4>{" "}
      <Stack direction="row" columnGap={1}>
        <Button variant="text" className="text-red-500">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  );
}
