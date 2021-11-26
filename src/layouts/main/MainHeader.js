import { AppBar, Container, Grid, Stack } from "@mui/material";
import Logo from "components/Logo";
import ThemeSwitch from "components/ThemeSwitch";
import React from "react";

export default function MainHeader() {
  return (
    <AppBar>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="py-2 px-4"
        >
          <Grid item>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Logo />
            </Stack>
          </Grid>
          <Grid item>
            <ThemeSwitch />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
