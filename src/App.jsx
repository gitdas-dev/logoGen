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
  const [downloadIcon, setDownloadIcon] = useState()

  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
      <Header DowndloadIcon={setDownloadIcon}/>
      <div className="w-64 fixed">
        <SideNav
          selectedIndex={(value) => {
            setSelectIndex(value);
          }}
        />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed w-full">
        <div className="md:col-span-1 border h-screen shadow-sm p-5 overflow-auto ">
          {selectIndex === 0 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-3">
          <LogoPreview downloadIcon={downloadIcon}/>
        </div>
        <div className="md:col-span-2">Adds banner</div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
