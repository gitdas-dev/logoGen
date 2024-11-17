import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import ColorPicker from "react-best-gradient-color-picker";
import IconList from "./IconList";

function IconController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );
  const [icon, setIcon] = useState( storageValue ? storageValue?.icon : 'Smile')
  const { setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconColor: color,
      icon: icon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [color, size, icon]);
  return (
    <div>
      <div>
        <IconList selectedIcon={(icon) => setIcon(icon)}/>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Size <span>{size} px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(e) => setSize(e[0])}
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
              hideControls={true}
              hideEyeDrop
              hideAdvancedSliders
              hideInputType
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconController;
