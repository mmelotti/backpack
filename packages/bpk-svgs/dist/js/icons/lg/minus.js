import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z" /></svg>);