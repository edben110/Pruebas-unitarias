import React from "react";
import ColorPicker from "../components/ColorPicker";

const ColorPickerView: React.FC = () => {
  return (
    <div style={{ padding: "2rem" , color:"white"}}>

      <h1>Vista del Selector de Color</h1>
      <ColorPicker />
    </div>
  );
};

export default ColorPickerView;
