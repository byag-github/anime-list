"use client"



export default function Loading() {
    return (
        <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto -mt-20 transition-all">
            <div className="flex flex-wrap items-center justify-center gap-6">
                <span className="loader"></span>
                <h2 className="mt-3 text-3xl text-red-400 ">LOADING DUDE..</h2>
            </div>
        </div>
    )
}