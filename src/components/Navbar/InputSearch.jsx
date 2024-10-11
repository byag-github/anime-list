"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function InputSearch() {

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword || keyword.trim() == "") return
        
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input placeholder="Cari Anime.." className="flex items-center justify-center w-full p-3 rounded" ref={searchRef} onKeyDown={handleSearch}>
            </input>
            <button className="absolute opacity-70 top-3 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={23} />
            </button>
        </div>
    )
}