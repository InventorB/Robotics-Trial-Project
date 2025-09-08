export function Body() {
    return (
        <div className="flex h-screen">
            <div className="flex-[2_1_0%] min-w-0 overflow-hidden p-4 bg-blue-300">
            <h1 className="flex items-center justify-center pb-6 text-xl">Livestream Demo</h1>
            <Video />
            </div>
            <div className="flex-[1_1_0%] min-w-0 overflow-hidden p-4 bg-red-300">
                <h1 className="flex items-center justify-center pb-6 text-xl">Controls</h1>
            </div>
        
        </div>
    )
}

export function Braden() {
    return (
    <div className="flex items-center justify-center pt-3 pb-6 text-3xl">
      <h1>"Braden was here"</h1>
    </div>
    );
}
export function Video() {
    return(
        <iframe width="100%" height="80%" src="https://www.youtube.com/embed/4TIpitPIsPA?si=VJkDSUyuFRcKcYtO?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}

