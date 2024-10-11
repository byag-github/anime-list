import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from '@/components/AnimeList/Header';

export default async function Page({ params }) {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

    return (
        <>
            <section>
                <Header title={`Pencarian untuk ${decodeKeyword}..`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    );
}
