import { useQuery } from "@apollo/client";
import { formatArray } from "lib/arrayObject";
import { QUERY_MOVIES } from "models/movieModel";
import React, { useEffect, useState } from "react";
import { openLoading } from "store/reducers/tools";
import MoviesFilter from "./forms/MoviesFilter";
import MoviesGridContainer from "./forms/MoviesGridContainer";
import { Alert } from "@mui/material";

export default function MoviesComponent() {
  const { loading, error, data } = useQuery(QUERY_MOVIES);
  const [filter, setFilter] = useState({});

  const formattedData = formatArray(data?.movies)
    .filter((item) =>
      filter?.search
        ? Object.values(item).join(" ").includes(String(filter?.search).trim())
        : true
    )
    .sort((a, b) =>
      (filter?.desc ? a?.title > b?.title : a?.title < b?.title) ? -1 : 1
    );

  useEffect(() => {
    openLoading(loading);
  }, [loading]);

  return (
    <div className="mt-8">
      <MoviesFilter className="my-2" data={filter ?? {}} onChange={setFilter} />
      {error && (
        <Alert className="my-2" severity="warning" elevation={12}>
          {error?.message ?? ""}
        </Alert>
      )}
      <MoviesGridContainer className="my-2" data={formattedData ?? []} />
    </div>
  );
}
