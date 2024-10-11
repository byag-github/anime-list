import '../app/globals.css'
import AnimeList from "@/components/AnimeList";
import Header from '@/components/AnimeList/Header';
import OnGoing from '@/components/AnimeList/OnGoing';
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '@/libs/api-libs';
import Link from 'next/link';

export default async function Page() {

    const topAnime = await getAnimeResponse("top/anime", "limit=7")

    let recommendationsAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
    recommendationsAnime = reproduce(recommendationsAnime, 3)

    // hit ongoin
    const res = await fetch('https://api.jikan.moe/v4/seasons/now');
    const data = await res.json();
    const animeList = data.data.slice(0, 9);
    // hit ongoin

    return (
        <div className='flex flex-col md:flex-row'>

            {/* popular and recommendations */}
            <div className='flex-2'>
                <section>
                    <Header title="Popular" linkTitle="See All" linkHref="/popular" />
                    <AnimeList api={topAnime} />
                </section>

                <section>
                    <Header title="Recommendation" />
                    <AnimeList api={recommendationsAnime} />
                </section>
            </div>

            {/* ongoing */}

            <div className='flex flex-col mb-4'>
                <div className='flex flex-col'>

                    <OnGoing title="On-Going" linkTitle="See All" linkHref="/ongoing" />
                    <ul>
                        {animeList.map((anime, index) => (
                            <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                                <li key={anime.mal_id} className="-mt-2 flex items-center mb-4 px-4 hover:underline hover:text-red-500">
                                    <span className="mr-2 text-lg font-semibold">{index + 1}.</span>
                                    <img src={anime.images.jpg.image_url} alt={anime.title} className="w-20 h-auto ml-2 mb-4 " />
                                    <div className='ml-4'>
                                        <h2 className="-mt-12 text-lg font-semibold">{anime.title}</h2>
                                        <p className="text-sm italic hover:!underline-0 hover:!bg-transparent">Status: {anime.status}</p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );


}

