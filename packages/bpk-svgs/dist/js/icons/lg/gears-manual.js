import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20 6.758v6.278h-7v4.277a2 2 0 1 1-2 0v-4.277H6v4.277a2 2 0 1 1-2 0V6.758a2 2 0 1 1 2 0v4.028h5V6.758a2 2 0 1 1 2 0v4.028h5V6.758a2 2 0 1 1 2 0z" /></svg>);