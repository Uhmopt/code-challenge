import React from "react";

export default function RawImage({ src = "", alt = "", ...props }) {
  return (
    <img
      key={"raw_image" + src + alt}
      src={src ?? ""}
      alt={alt ?? ""}
      {...props}
    />
  );
}
