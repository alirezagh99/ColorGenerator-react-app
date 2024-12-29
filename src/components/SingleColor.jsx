import React from "react";

function SingleColor({ item, index }) {
  const hex = item.hex;
  const weight = item.weight;
  const bgColor = "#" + hex;
  const txtColor = index > 10 ? "#fff" : "#000";
  const myStyle = {
    backgroundColor: bgColor,
    color: txtColor,
  };

  return (
    <div className={"w-1/5 border p-5 text-sm font-bold"} style={myStyle}>
      <div>#{hex}</div>
      <div>{weight}%</div>
    </div>
  );
}

export default SingleColor;
