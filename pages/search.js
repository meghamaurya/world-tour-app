import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
    const router = useRouter();
    const inputRef = useRef(null);
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [result, setResult] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            setSearchData(data.sort());
        };
        getData();
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
        let countryName = searchData.filter((item) => {
            return item.name.common
                .toLowerCase()
                .substring(0, item.name.common.length)
                .includes(search);
        });
        setResult(countryName);
        setText(e.target.value);
    };

    const handlePressKey = (e) => {
        if (e.key === "Enter") {
            router.push(`/${capitalizeFirstLetter(text)}`);
            setSearch("");
            setResult("");
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    };

    const handleLinkClick = () => {
        setSearch("");
        setResult("");
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const capitalizeFirstLetter = (text) => {
        const firstLetter = text.charAt(0).toUpperCase();
        const remainingText = text.slice(1, text.length);
        return `${firstLetter}${remainingText}`;
    };

    return (
        <div className="flex gap-5 mt-2">
            <input
                className="border border-blue-500"
                onChange={handleChange}
                ref={inputRef}
                onKeyDown={handlePressKey}
            />
            {/* <Link
        href={`/${capitalizeFirstLetter(text)}`}
        className="bg-blue-400 py-0.5 px-2 rounded-md"
        onClick={handleClick}
      >
        get detail
      </Link> */}
            {search && (
                <div className="flex flex-col gap-1 h-1/2 top-14 absolute z-10 font-semibold overflow-scroll ">
                    {result.map((items) => {
                        return (
                            <>
                                <Link
                                    className="mt-2"
                                    onClick={handleLinkClick}
                                    href={`/${items.name.common}`}
                                >
                                    {items.name.common}
                                </Link>
                                <hr />
                            </>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchBar; ``