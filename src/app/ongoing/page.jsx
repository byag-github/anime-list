"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

export default async function Page() {
    const [page, setPage] = useState(1)
    const [ongoingAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const ongoingAnime = await getAnimeResponse("seasons/now", `page=${page}`)
        setTopAnime(ongoingAnime)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu title={`On-Going #${page}`} />
            <AnimeList api={ongoingAnime} />
            <Pagination page={page} lastPage={ongoingAnime.pagination?.last_visible_page} setPage={setPage} />
        </>
    )
}