import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [result, setResult] = useState([]);
    var i;
    useEffect(() => {
        const getData = async () => {
            setSearch("");
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setSearchData(data);
        }
        getData();
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
        let countryName = searchData.filter((item) => {
            return item.name.common
                .toLowerCase()
                .includes(search);
        });
        setResult(countryName);
    };

    const handleClick = () => {
        setSearch("");
        setResult("");
        router.push("/official");
    }
    return (
        <div className="flex gap-1">
            <input className="border border-blue-500 rounded-md" onChange={handleChange} />
            <button
                className="bg-blue-400 px-2 font-bold rounded-md"
                onClick={handleClick}
            >search</button>
            {search && (
                <div className="flex flex-col gap-1 h-1/2 absolute top-14 z-10 font-semibold overflow-scroll">{result.map((items) => {
                    return (
                        <>
                            <Link
                                key={i++}
                                href={`/${items.name.common}`}
                                onClick={() => (
                                    setSearch(""),
                                    setResult("")
                                )}
                            >{items.name.common}</Link>
                            <hr />
                        </>
                    )
                })}</div>
            )}
        </div>
    )
}

export default Search
