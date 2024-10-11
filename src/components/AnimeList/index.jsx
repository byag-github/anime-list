import Image from 'next/image';
import Link from 'next/link';

export default function AnimeList({ api }) {
    return (
        <div className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="transition-all cursor-pointer hover:text-red-500" key={index}>
                        <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} priority={true} className="object-cover w-full max-h-64" />
                        <h3 className="p-4 text-base font-bold md:text-lg">{anime.title}</h3>
                    </Link>
                )
            })}

        </div>
    );
}