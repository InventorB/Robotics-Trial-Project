export function Body() {
    return (
        <div>
        <Video />
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
        <iframe width="1100" height="600" src="https://www.youtube.com/embed/4TIpitPIsPA?si=VJkDSUyuFRcKcYtO?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    )
}

