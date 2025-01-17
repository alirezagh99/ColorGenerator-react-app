import React, { useState } from "react";
import Values from "values.js";

function Form({ handleColorList }) {
  const [color, setColor] = useState();
  const handleChangeText = (e) => {
    setColor(e.target.value);
  };
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(10);
    // console.log(colors);
    handleColorList(colors);
  };

  return (
    <form onSubmit={handleSubmit} className="m-10 flex flex-row items-center">
      <label className="text-[15px]" htmlFor="cg">
        Color Generator
      </label>
      <input
        onChange={handleChangeColor}
        className="mx-5 cursor-pointer"
        type="color"
        name="color"
        id="cg"
        value={color}
      />
      <input
        onChange={handleChangeText}
        className="border text-[12px] py-1 rounded pl-1 w-20 mr-10"
        placeholder="#f15025"
        type="text"
        value={color}
      />
      <button className="text-white bg-blue-800 text-[12px] px-4 py-1 rounded hover:bg-blue-950 transition-all duration-500 hover:shadow-lg">
        Submit
      </button>
    </form>
  );
}

export default Form;
