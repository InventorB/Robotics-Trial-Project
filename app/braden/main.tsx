// images
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from '@mui/icons-material/Info';

// previos files
import { Welcome } from "../welcome/welcome";
import { Body } from "../braden/body";
// react hooks
import React, { useState, useEffect } from "react";





// Main component that includes Topbar and Body
export function Main() {
  const [settingsEnabled, setSettingsEnabled] = React.useState(false);
  const [bottbarEnabled, setbottbarEnabled] = React.useState(true);
  return (
    /* needs to return a single parent element */
    <div>
    <Topbar onToggleSettings={() => setSettingsEnabled((s) => !s)} onToggleBSettings={() => setbottbarEnabled((s) => !s)}  />
    <Body settingsEnabled={settingsEnabled} />
    {bottbarEnabled ? (
    <BottomBar />
    ) : null }
    </div>
  );
}

export function Topbar({ onToggleSettings, onToggleBSettings }: { onToggleSettings: () => void; onToggleBSettings: () => void }) {
    return(
    <div className= "bg-blue-700 p-3 flex items-center" >
        <a className = "text-gray-900 text-lg text-white" href="#home">Mission Control Home</a>
        <div className="ml-auto flex items-center gap-7">
          <BottBarButton onToggleBSettings={onToggleBSettings} />
          <SettingsButton onToggleSettings={onToggleSettings} />
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
  <AspectRatioIcon className="inline-flex"/>
  </button>
  )
}
export function SettingsButton({ onToggleSettings }: { onToggleSettings: () => void }) {
  const toggleSettings = () => {
  console.log("Toggling settings.");
  onToggleSettings();
};
  
  return(
  <button onClick={toggleSettings}>
  <SettingsIcon className="inline-flex"/>
  </button>
  )
}

export function BottBarButton({ onToggleBSettings }: { onToggleBSettings: () => void }) {
  const toggleSettings = () => {
  console.log("Toggling settings.");
  onToggleBSettings();
};
  
  return(
  <button onClick={toggleSettings}>
  <InfoIcon className="inline-flex"/>
  </button>
  )
}
