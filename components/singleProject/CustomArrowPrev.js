import React from "react";

function CustomArrowPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "#000000", fontSize: "2rem", right: "0px" }}
      onClick={onClick}
    >
      &#8226;
    </div>
  );
}

export default CustomArrowPrev;
