"use client"

import { useState } from "react"
import YouTube from "react-youtube"

function Eye(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={150}
            height={150}
            viewBox="0 0 1200 1200"
            className="text-red-500 hover:text-yellow-300" // Set default color to red and hover color to yellow
            {...props}
        >
            <path
                fill="currentColor" // Use currentColor for the fill
                d="M669.727 273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025.457-209.823 25.517-310.913 73.536c-75.058 37.122-148.173 89.529-211.67 154.174C46.232 529.978 6.431 577.76 0 628.74c.76 44.162 48.153 98.67 77.417 131.764c59.543 62.106 130.754 113.013 211.67 154.174q4.126 2.003 8.276 3.955l-75.072 131.102l102.005 60.286l551.416-960.033l-98.186-60.008zm232.836 65.479l-74.927 129.857c34.47 44.782 54.932 100.006 54.932 159.888c0 149.257-126.522 270.264-282.642 270.264c-6.749 0-13.29-.728-19.922-1.172l-49.585 85.84c22.868 2.449 45.99 4.233 69.58 4.541c103.123-.463 209.861-25.812 310.84-73.535c75.058-37.122 148.246-89.529 211.743-154.174c31.186-32.999 70.985-80.782 77.417-131.764c-.76-44.161-48.153-98.669-77.417-131.763c-59.543-62.106-130.827-113.013-211.743-154.175c-2.731-1.324-5.527-2.515-8.276-3.807m-302.636 19.483c6.846 0 13.638.274 20.361.732l-58.081 100.561c-81.514 16.526-142.676 85.88-142.676 168.897c0 20.854 3.841 40.819 10.913 59.325c.008.021-.008.053 0 .074l-58.228 100.854c-34.551-44.823-54.932-100.229-54.932-160.182c.001-149.255 126.524-270.262 282.643-270.261m168.969 212.035L638.013 797.271c81.076-16.837 141.797-85.875 141.797-168.603c0-20.474-4.086-39.939-10.914-58.155"
            />
        </svg>
    );
}

export default function VideoPlayer({ youtubeId }) {

    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "300",
    }

    const ClosePlayer = () => {
        return (
            <div className="fixed right-2 bottom-3">
                <button onClick={handleVideoPlayer} className="float-right mb-2 mr-2 ">
                    <Eye width={40} height={40} />
                </button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    const OpenPlayer = () => {
        return (
            <button onClick={handleVideoPlayer}
                className="fixed w-40 p-3 text-xl font-bold text-black bg-blue-500 rounded-full bottom-3 right-3 hover:text-yellow-300">
                Watch Trailer
            </button>
        )
    }

    return isOpen ? <ClosePlayer /> : <OpenPlayer />
}