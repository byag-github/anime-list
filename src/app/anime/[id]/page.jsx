import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

export default async function Page({ params: { id } }) {
    const anime = await getAnimeResponse(`anime/${id}`)
    // console.log(anime)
    return (
        <div className="flex flex-col">
            {/* title and type */}
            <div className="px-4 pt-4">
                <h3 className="text-xl font-bold">{anime.data.title} - ( {anime.data.type} {anime.data.year} )</h3>
            </div>

            {/* rank, score, and episodes */}
            <div className="flex gap-2 px-4 pt-3 overflow-x-auto">
                <div className="flex flex-col items-center justify-center px-3 py-2 border border-red-400 rounded w-28">
                    <h3>Rank</h3>
                    <p className="italic underline decoration-red-400"><span className="text-red-400">#</span>{anime.data.rank}</p>
                </div>
                <div className="flex flex-col items-center justify-center px-3 py-2 border border-red-400 rounded w-28">
                    <h3>Score</h3>
                    <p className="italic underline decoration-red-400">{anime.data.score}</p>
                </div>
                <div className="flex flex-col items-center justify-center px-3 py-2 border border-red-400 rounded w-28">
                    <h3>Episodes</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>

            {/* image anime */}
            <div className="flex flex-wrap gap-3 px-4 py-5 sm:flex-nowrap">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={150}
                    className="object-cover rounded w-full sm:w-[350px] sm:max-h-[550px]"
                />
            </div>

            {/* Durations and Status Container */}
            <div className="flex flex-col gap-3 px-4 pt-0 overflow-x-auto sm:flex-row">
                <div className="flex flex-col items-center justify-center px-3 py-2 border border-red-400 rounded w-34">
                    <h3>Duration</h3>
                    <p>{anime.data.duration}</p>
                </div>
                <div className="flex flex-col items-center justify-center px-3 py-2 border border-red-400 rounded w-34">
                    <h3>Status</h3>
                    <p>{anime.data.status}</p>
                </div>
            </div>

            {/* synopsis */}
            <div className="flex flex-wrap gap-5 px-4 pt-5 sm:flex-nowrap order-last mb-10">
                <p className="text-xl text-justify"><span className="flex mb-5">Synopsis:</span>{anime.data.synopsis}</p>
            </div>

            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </div>
    )
}