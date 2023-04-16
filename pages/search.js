import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setSearchData(data);
        }
        getData();
    }, []);

    const handleChange = (e) => {
        console.log(e.target.value, "search")
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
                <div>{result.map((items) => {
                    return (
                        <>
                            <a
                                href={`/${items.name.common}`}
                                onClick={() => handleClick(items.name.common)}
                            >{items.name.common}</a>
                            <hr />
                        </>
                    )
                })}</div>
            )}
        </div>
    )
}

export default Search
