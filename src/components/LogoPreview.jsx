import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
const Base_Url = "https://logoexpress.tubeguruji.com";
function LogoPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));

    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    console.log(Base_Url + "/png/" + storageValue?.icon);

    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "Logo_express.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }

    return <LucidIcon color={color} size={size} />;
  };
  return (
    <div className="flex items-center justify-center h-screen lg:py-96 overflow-auto">
      <div
        className="w-[500px] h-[500px] bg-gray-300 outline-dotted outline-gray-300"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex justify-center items-center rounded-full"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <img
              src={"/png/" + storageValue?.icon}
              style={{
                height: storageValue?.iconSize,
                width: storageValue?.iconSize,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
