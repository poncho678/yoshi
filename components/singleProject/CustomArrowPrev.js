import React from "react";

function CustomArrowPrev(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
}

export default CustomArrowPrev;
