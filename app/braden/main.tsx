// images
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/DarkMode";
// previos files
import { Welcome } from "../welcome/welcome";
import { Body } from "../braden/body";
// react hooks
import React, { useState, useEffect } from "react";




// Main component that includes Topbar and Body
export function Main() {
  return (
    /* needs to return a single parent element */
    <div>
    <Topbar />
    <Body/>
    <BottomBar />
    </div>
  );
}

export function Topbar() {
    return(
    <div className= "bg-blue-700 p-3 flex items-center" >
        <a className = "text-gray-900 text-lg text-white" href="#home">Home</a>
        <div className="ml-auto flex items-center gap-3">
          <FullscreenButton />
        </div >
    </div>
    );
}
export function BottomBar() {
    return(
    <div className= "fixed bottom-0 left-0 w-full bg-orange-500 p-3 flex items-center" >
        <a className = "text-gray-900 text-lg" href="#home">Server Online</a>
        <a className = "text-gray-900 text-lg px-2 space-x-4" >23ms</a>
        <a className = "text-gray-900 ml-auto px-2 text-lg" >Copyright Braden Wagner 2025</a>
    </div>
    );
}

export function FullscreenButton() {
    const [isFullScreen, setFullScreen] = useState(false);
    
  const toggleFullscreen = () => {
    console.log("Toggling fullscreen.");
    if (!isFullScreen) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
  setFullScreen(!isFullScreen);
};
  
  return(
  <button onClick={toggleFullscreen}>
  <FullscreenIcon className="inline-flex"/>
  </button>
  )
}

