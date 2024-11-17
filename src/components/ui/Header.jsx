import React from "react";
import { Button } from "./button";
import { Download } from "lucide-react";

function Header({ DowndloadIcon }) {
  return (
    <div className="p-4 shadow-sm border bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-between items-center">
      <div className="flex justify-center items-center text-white">
      <img src="/logo.svg" className="h-8 w-8 mr-2" alt="Logo" />
        <h1 className="text-xl font-extrabold">LogoGen</h1>
      </div>

      <Button
        className="flex gap-2 items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md"
        onClick={() => DowndloadIcon(Date.now())}
      >
        <Download className="h-4 w-4" /> Download
      </Button>
    </div>
  );
}

export default Header;
