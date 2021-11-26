import { formatArray } from "lib/arrayObject";
import { COUNT_PER_PAGE } from "lib/global";
import React, { useState } from "react";
import MoviesGrid from "./MoviesGrid";

export default function MoviesGridContainer({ data: allData = [] }) {
  const [page, setPage] = useState({ index: 0, pages: 0 });

  const formattedData = formatArray(allData).slice(
    page.index * COUNT_PER_PAGE,
    (page.index + 1) * COUNT_PER_PAGE
  );

  return (
    <div>
      <MoviesGrid data={formattedData} />
    </div>
  );
}
