

export function Main() {
  return (
    /* needs to return a single parent element */
    <div>
    <Topbar />
    <Braden />
    </div>
  );
}

export function Topbar() {
    return(
    <div className= "bg-green-300 p-3" >
        <a className = "text-gray-900 text-lg" href="#home">Home</a>
    </div>
    );
}

export function Braden() {
    return (
    <div className="flex items-center justify-center pt-16 pb-4">
      <h1>"Braden was here"</h1>
    </div>
    );
}