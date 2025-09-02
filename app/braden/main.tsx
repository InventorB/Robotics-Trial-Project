
import { Welcome } from "../welcome/welcome";
import { Body } from "../braden/body";
import { Topbar } from "../braden/Topbar";

// Main component that includes Topbar and Body
export function Main() {
  return (
    /* needs to return a single parent element */
    <div>
    <Topbar />
    <Body/>
    </div>
  );
}


