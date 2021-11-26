import { Backdrop } from "@mui/material";
import AnimVideoLoading from "components/Animations/AnimVideoLoading";
import React from "react";
import { useSelector } from "react-redux";

export default function PageLoading({ show = false }) {
  const isLoading = useSelector((state) => state?.app?.isLoading ?? false);
  return (
    <div>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={Boolean(isLoading)}
      >
        <div>
          <AnimVideoLoading width={360} />
        </div>
      </Backdrop>
    </div>
  );
}
