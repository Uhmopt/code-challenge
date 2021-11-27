import { useQuery } from "@apollo/client";
import { Refresh } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";
import { formatArray } from "lib/arrayObject";
import { QUERY_GET_MOVIES } from "models/movieModel";
import React, { useEffect, useState } from "react";
import { openLoading } from "store/reducers/tools";
import MoviesFilter from "./forms/MoviesFilter";
import MoviesGridContainer from "./forms/MoviesGridContainer";

export default function MoviesComponent() {
  const { loading, error, data, refetch } = useQuery(QUERY_GET_MOVIES);
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

  const handleReload = () => {
    openLoading(true);
    refetch()
      .then(() => {
        openLoading(false);
      })
      .catch(() => {
        openLoading(false);
      });
  };

  useEffect(() => {
    if (loading) {
      openLoading(loading);
    } else {
      setTimeout(() => {
        openLoading(loading);
      }, 2000);
    }
  }, [loading]);

  return (
    <div className="mt-8">
      <MoviesFilter className="my-2" data={filter ?? {}} onChange={setFilter} />
      {error && (
        <Alert
          className="my-2"
          severity="warning"
          elevation={6}
          action={
            <Button
              onClick={handleReload}
              color="primary"
              variant="outlined"
              size="small"
              startIcon={<Refresh />}
            >
              Retry
            </Button>
          }
        >
          {error?.message ?? ""}
        </Alert>
      )}
      <MoviesGridContainer className="my-2" data={formattedData ?? []} />
    </div>
  );
}
