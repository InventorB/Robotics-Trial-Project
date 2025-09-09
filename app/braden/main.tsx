// images
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SettingsIcon from "@mui/icons-material/Settings";
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
        <a className = "text-gray-900 text-lg text-white" href="#home">Mission Control Home</a>
        <div className="ml-auto flex items-center gap-3">
          <SettingsButton />
          <FullscreenButton />
        </div >
    </div>
    );
}
export function BottomBar() {
    return(
    <div className= "fixed bottom-0 left-0 w-full bg-orange-500 p-3 flex items-center" >
        <a className = "text-gray-900 text-lg" href="#home">Connected</a>
        <a className = "text-gray-900 text-lg px-2 space-x-4" ></a>
        <a className = "text-gray-900 ml-auto px-2 text-lg" >Robotics Trial Project 2025</a>
    </div>
    );
}

export function FullscreenButton() {
  const toggleFullscreen = () => {
  console.log("Toggling fullscreen.");
  if (document.fullscreenElement == null) {
  document.documentElement.requestFullscreen();
  } else {
  document.exitFullscreen();
  }
};
  
  return(
  <button onClick={toggleFullscreen}>
  <FullscreenIcon className="inline-flex"/>
  </button>
  )
}
export function SettingsButton() {
  const toggleSettings = () => {
  console.log("Toggling settings.");
};
  
  return(
  <button onClick={toggleSettings}>
  <SettingsIcon className="inline-flex"/>
  </button>
  )
}

