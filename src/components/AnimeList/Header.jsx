import Link from "next/link"

export default function Header({ title, linkHref, linkTitle }) {
    return (
        <div className="flex items-center justify-between p-4" >
            <h1 className="text-2xl font-bold">{title}</h1>
            {
                linkHref && linkTitle
                    ?
                    <Link href={linkHref} className="text-base underline transition-all hover:text-red-400">{linkTitle}</Link>
                    : null
            }
        </div >
    )
}