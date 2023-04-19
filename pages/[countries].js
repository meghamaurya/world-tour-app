import Image from "next/image";
import { useRouter } from "next/router";
export let officialName = [];

export async function getStaticPaths() {
    const jsondata = await fetch("https://restcountries.com/v3.1/all");
    const data = await jsondata.json();
    var values = data.map((item) => {
        return {
            params: { country: item.name.common },
        };
    });

    return {
        paths: values,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    var current = context.params.country;
    const jsondata = await fetch(`https://restcountries.com/v3.1/name/${current}`);
    const data = await jsondata.json();
    return {
        props: {
            countries: data,
        },
    };
}

function Country({ countries }) {
    console.log(countries, "contry");
    const router = useRouter();
    const countryName = router.query.country;
    console.log(countryName, "countryName");

    const handleClick = (countryName) => {
        officialName = [...officialName, countryName];
        router.push(
            {
                pathname: `/official`,
                query: { offlicialName: countryName },
            });
    };
    return (
        <div>
            {console.log(countries.length, "length")}
            {countries.length > 1 ? (
                <>
                    {countries.map((items, i) => {
                        return (
                            <div key={i}
                                className="flex gap-5 justify-around">
                                <Image src={`${items.flags.svg}`}
                                    width={50}
                                    height={5} />
                                <div>{items.name.common}</div>
                                <button onClick={() => handleClick(items.name.official)}>
                                    get details
                                </button>
                            </div>
                        );
                    })}
                </>
            ) : (
                <>
                    {countries.map((list, i) => {
                        return (
                            <div key={i} className="bg-slate-400">
                                <Image src={`${list.flags.svg}`}
                                    width={500}
                                    height={5}
                                    className="mix-blend-screen w-full" />

                                <div className="absolute text-black top-1/4 mx-3">
                                    <h2>Country name: {list.name.common}</h2>
                                    <h3>Official name: {list.name.official}</h3>
                                    <h3 className="flex gap-2">
                                        Capital:
                                        {list.capital.map((item) => { return <p>{item}</p>; })}
                                    </h3>
                                    <p>Continent: {list.region}</p>
                                    <h3 className="flex gap-2">
                                        languages: {Object.values(list.languages)}
                                    </h3>
                                    <h3>Currencies: {Object.keys(list.currencies)}</h3>
                                    <h4 className="flex gap-3">
                                        Borders:
                                        {list.borders && list.borders.map((item) => { return <p>{item},</p>; })}
                                    </h4>
                                    <p>Area: {list.area}</p>
                                    <p>
                                        Time zones:{" "}
                                        <span className="flex flex-col">{list.timezones}</span>
                                    </p>
                                    <p>population: {list.population}</p>
                                </div>
                                {/* <Image src={`${list.coatOfArms.svg}`} width={50} height={20} /> */}
                                {/* <img src={`${list.maps.googleMaps}`} width="100" height="50" /> */}
                            </div>
                        );
                    })
                    }
                </>
            )}
        </div>
    );
}
export default Country;