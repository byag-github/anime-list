"use client"

import { GlobeX } from "@phosphor-icons/react"
import '../app/globals.css'
import Link from "next/link"

export default function Page() {
    return (
        <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto -mt-24 transition-all">
            <div className="flex flex-wrap items-center justify-center gap-2">
                <GlobeX size={60} className="text-red-500" />
                <h2 className="mt-3 text-3xl text-red-400 ">NOT FOUND DUDE</h2>
                <div className="flex justify-center w-full mt-3">
                    <Link href="/" className="text-lg text-blue-400 underline hover:text-red-500">Go Back to your hommie</Link>
                </div>
            </div>
        </div>
    )
}