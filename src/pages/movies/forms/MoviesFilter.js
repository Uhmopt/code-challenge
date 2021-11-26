import { Sort } from "@mui/icons-material";
import { Grid, IconButton, TextField } from "@mui/material";
import React from "react";

export default function MoviesFilter({ data = {}, onChange = () => {} }) {
  const handleChangeByName = (name = "", value = "") => {
    onChange((s = {}) => ({ ...(s ?? {}), [name]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e?.target ?? {};
    handleChangeByName(name, value);
  };

  const toggleSort = () => {
    onChange((s = {}) => ({ ...(s ?? {}), desc: !s?.desc }));
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
        <Grid item>
          <IconButton
            color={data?.desc ? "error" : "primary"}
            onClick={toggleSort}
          >
            <Sort />
          </IconButton>
        </Grid>
        <Grid item>
          <TextField
            name="search"
            placeholder="Search ..."
            value={data?.search ?? ""}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>
    </div>
  );
}
