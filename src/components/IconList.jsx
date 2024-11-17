import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { icons, Smile } from "lucide-react";
import { iconList } from "@/constant/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

function IconList({ selectedIcon }) {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
  const [pngIconList, setPngIconList] = useState([]);
  const Base_Url = "https://logoexpress.tubeguruji.com";

  useEffect(() => {
    getPngIcons();
  }, []);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }

    return <LucidIcon color={color} size={size} />;
  };

  const getPngIcons = async () => {
    await axios.get(Base_Url + "/getIcons.php").then((res) => {
      setPngIconList(res.data);
    });
  };
  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2"
        >
          {icon?.includes(".png") ? (
            <img src={Base_Url + "/png/" + icon} />
          ) : (
            <Icon color={"#000"} name={icon} size={20} />
          )}
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Icon from below</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[300px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Colored Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="grid grid-cols-2 md:grid-cols-3  gap-2 overflow-auto h-[400px] p-6 scrollbar-hide">
                    {iconList.map((icon, index) => (
                      <div
                        key={index}
                        className="border p-3 rounded-sm flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(icon);
                          setOpenDialog(false);
                          setIcon(icon);
                        }}
                      >
                        <Icon color={"#000"} name={icon} size={20} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icon">
                  <div className="grid grid-cols-2 md:grid-cols-3  gap-2 overflow-auto h-[400px] p-6 scrollbar-hide">
                    {pngIconList.map((icon, index) => (
                      <div
                        key={index}
                        className="border p-3 rounded-sm flex justify-center items-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(icon);
                          setOpenDialog(false);
                          setIcon(icon);
                        }}
                      >
                        <img src={Base_Url + "/png/" + icon} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
