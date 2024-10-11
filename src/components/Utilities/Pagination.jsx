export default function Pagination({ page, lastPage, setPage }) {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollTop()
    };

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollTop()
    };

    return (
        <div className="flex items-center justify-center gap-3 p-3 text-xl">
            {
                page <= 1 ? null : <button onClick={handlePrevPage} className="underline transition-all hover:text-red-500" >
                    Prev
                </button>
            }

            <p className="text-xl text-red-300">{page} of {lastPage}</p>

            {
                page >= lastPage ? null : <button onClick={handleNextPage} className="underline transition-all hover:text-red-500" >
                    Next
                </button>
            }
        </div>
    );
}
