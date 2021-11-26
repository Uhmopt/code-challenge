import React from "react";

export default function HtmlContainer({ children = "" }) {
  return <div className={`relative min-h-screen transition-all`}>{children}</div>;
}
