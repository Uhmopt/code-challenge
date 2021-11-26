import { Pagination } from "@mui/material";
import { formatArray } from "lib/arrayObject";
import { COUNT_PER_PAGE } from "lib/global";
import React, { useEffect, useState } from "react";
import MoviesGrid from "./MoviesGrid";

export default function MoviesGridContainer({ data: allData = [] }) {
  const [page, setPage] = useState({ index: 1, pages: 0 });

  const formattedData = formatArray(allData).slice(
    Math.max(page.index - 1, 0) * COUNT_PER_PAGE,
    page.index * COUNT_PER_PAGE
  );

  const handleChangePage = (e, v) => {
    setPage((s = {}) => ({ ...(s ?? {}), index: v }));
  };

  useEffect(() => {
    setPage((s = {}) => ({
      ...(s ?? {}),
      pages: Math.ceil(formatArray(allData).length / COUNT_PER_PAGE),
    }));
  }, [allData]);

  return (
    <div className="my-4">
      <MoviesGrid data={formattedData} />
      <div className="flex justify-center py-2">
        <Pagination
          count={page?.pages}
          page={page?.index}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
}
