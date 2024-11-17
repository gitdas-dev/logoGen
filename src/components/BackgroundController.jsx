import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import ColorPicker from "react-best-gradient-color-picker";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPaddding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#fff"
  );
  const { setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgColor: color,
      bgRounded: rounded,
      bgPadding: padding,
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [color, padding, rounded]);

  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(e) => setRounded(e[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(e) => setPaddding(e[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Color picker
        </label>
        <div>
          <ColorPicker
            value={color}
            onChange={(e) => {
              setColor(e);
            }}
            hideControls={false}
            hideEyeDrop
            hideAdvancedSliders
            hideInputType
          />
        </div>
      </div>
    </div>
  );
}

export default BackgroundController;
