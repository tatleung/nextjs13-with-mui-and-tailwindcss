"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
// import { CacheProvider } from "@emotion/react";
// import { StyledEngineProvider } from "@mui/material/styles";
// import createEmotionCache from "./utility/createEmotionCache";

import darkTheme from "./theme/darkTheme";
// import lightTheme from "./theme/lightTheme";
import "./globals.css";

// const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}