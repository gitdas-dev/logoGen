import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

function ColorpickerController({ hideController = false, selectedColor }) {
  const storageValue = JSON.parse(localStorage.getItem('value'))
  const [color, setColor] = useState("#fff");
  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(e) => {
          setColor(e);
          selectedColor(e);
        }}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideInputType
      />
    </div>
  );
}

export default ColorpickerController;
