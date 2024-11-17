import "./App.css";
import Header from "./components/ui/Header";
import SideNav from "./components/ui/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import { useState } from "react";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <Header DowndloadIcon={setDownloadIcon} />

      <div className="flex fixed w-full">
        <div className="md:w-64">
          <SideNav
            selectedIndex={(value) => {
              setSelectIndex(value);
            }}
          />
        </div>
        <div className="flex w-full">
          <div className="border h-full shadow-sm p-5 overflow-auto w-auto lg:w-1/4">
            {selectIndex === 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="w-1/1 lg:w-3/4">
            <LogoPreview downloadIcon={downloadIcon} />
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
