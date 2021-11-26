import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state?.conf?.isDark ?? false);

  const toggleTheme = () => {
    dispatch({
      type: "SET_CONFIG",
      payload: (state) => ({ ...(state ?? {}), isDark: !state?.isDark }),
    });
  };

  return (
    <div>
      <FormControlLabel
        label={isDark ? "Night" : "Day"}
        control={<Switch checked={isDark} onChange={toggleTheme} />}
      />
    </div>
  );
}
