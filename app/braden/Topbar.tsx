// fullscreen icons
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/DarkMode";



export function Topbar() {
    return(
    <div className= "bg-green-300 p-3" >
        <a className = "text-gray-900 text-lg" href="#home">Home</a>
        <FullscreenIcon className="float-right bg-gray-900 rounded-lg"/>
        <DarkModeIcon className="float-right bg-gray-900 rounded-lg mx-2"/>
    </div>
    );
}
