import Link from "next/link"
import InputSearch from "./InputSearch"

export default function Navbar() {
    return (
        <header>
            <div className="flex flex-col justify-between gap-2 p-5 text-black bg-red-500 md:items-center md:flex-row">
                <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-yellow-300">ANIME LIST (HOME)</Link>
                <InputSearch />
            </div>
        </header>
    )
}