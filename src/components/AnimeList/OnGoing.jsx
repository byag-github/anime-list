import Link from "next/link"

export default function OnGoing({ title, linkHref, linkTitle }) {
    return (
        <div className="flex items-center justify-between mr-4 ml-4 mt-4 mb-6 border-b-2 border-blue-500">
            <h1 className="text-2xl font-bold pb-2">
                {title}
            </h1>
            {
                linkHref && linkTitle
                    ?
                    <Link href={linkHref} className="text-base underline transition-all hover:text-red-400">{linkTitle}</Link>
                    : null
            }
        </div>
    )
}