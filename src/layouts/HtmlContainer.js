import React from "react";

export default function HtmlContainer({ children = "" }) {
  return <div className={`min-h-screen`}>{children}</div>;
}
