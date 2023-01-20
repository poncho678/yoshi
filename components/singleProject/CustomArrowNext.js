import React from "react";

function CustomArrowNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "#000000", fontSize: "2rem" }}
      onClick={onClick}
    ></div>
  );
}

export default CustomArrowNext;
