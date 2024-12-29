import React from "react";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";
function ColorList({ colorList }) {
  //   console.log(colorList);
  return (
    <div className="flex flex-row flex-wrap mt-10">
      {colorList.map((item, index) => {
        return <SingleColor item={item} key={uuidv4()} index={index} />;
      })}
    </div>
  );
}

export default ColorList;
