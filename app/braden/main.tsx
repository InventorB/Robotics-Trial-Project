import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/DarkMode";

import { Welcome } from "../welcome/welcome";
import { Body } from "../braden/body";




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
    <div className= "bg-blue-600 p-3" >
        <a className = "text-gray-900 text-lg" href="#home">Home</a>
        <FullscreenIcon className="float-right bg-gray-900 rounded-lg"/>
        <DarkModeIcon className="float-right bg-gray-900 rounded-lg mx-2"/>
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

