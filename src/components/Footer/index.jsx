import Link from "next/link"

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col justify-between gap-3 p-5 text-black bg-red-500 md:items-center md:flex-row">
                <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-yellow-300">&copy; BYAG | yusufahmadghiffari</Link>
            </div>
        </footer>
    )
}