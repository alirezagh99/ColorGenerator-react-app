import Form from "./components/Form";
import ColorList from "./components/ColorList";
import { useState } from "react";
function App() {
  const [colorList, setColorList] = useState([]);
  const handleColorList = (cl) => {
    setColorList(cl);
  };
  return (
    <>
      <Form handleColorList={handleColorList} />
      <ColorList colorList={colorList} />
    </>
  );
}

export default App;
