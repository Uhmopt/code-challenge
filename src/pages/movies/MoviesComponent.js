import { formatArray } from "lib/arrayObject";
import { getMovies } from "models/movieModel";
import React, { useEffect, useState } from "react";
import { openLoading } from "store/reducers/tools";
import MoviesFilter from "./forms/MoviesFilter";
import MoviesGridContainer from "./forms/MoviesGridContainer";

export default function MoviesComponent() {
  const [filter, setFilter] = useState({});
  const [data, setData] = useState([]);

  const loadData = (onFinish = () => {}) => {
    getMovies({
      onFinish: (resMovies) => {
        setData(formatArray(resMovies));

        onFinish(resMovies);
      },
    });
  };

  const formattedData = formatArray(data)
    .filter((item) =>
      filter?.search
        ? Object.values(item).join(" ").includes(String(filter?.search).trim())
        : true
    )
    .sort((a, b) =>
      (filter?.desc ? a?.title > b?.title : a?.title < b?.title) ? -1 : 1
    );

  useEffect(() => {
    openLoading(true);
    loadData(() => {
      openLoading(false);
    });
  }, []);

  return (
    <div className="mt-8">
      <MoviesFilter data={filter ?? {}} onChange={setFilter} />
      <MoviesGridContainer data={formattedData ?? []} />
    </div>
  );
}
