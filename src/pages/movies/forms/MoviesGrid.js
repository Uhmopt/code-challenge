import { Grid } from "@mui/material";
import { formatArray } from "lib/arrayObject";
import React from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ data = [] }) {
  return (
    <div>
      <Grid container spacing={2}>
        {formatArray(data).map((movie, movieIndex) => (
          <Grid key={movieIndex} item lg={3} md={4} sm={6} xs={12}>
            <MovieCard data={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
