import { useEffect, useState } from "react";
import { officialArray } from "../[countries]";
import Image from "next/image";

const officialName = () => {
    console.log(officialArray, 'arr')
    const [countryDetail, setCountryDetail] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://restcountries.com/v3.1/name/${officialArray}?fullText=true`);
            const data = await res.json();
            setCountryDetail(data);
        }
        getData();
    }), [officialArray]
    return (
        <div>
            official
            {countryDetail && countryDetail.map((items, i) => {
                return (
                    <div key={i} className=" bg-contain bg-center bg-no-repeat bg-blend-lighten" style={{ backgroundImage: `url(${items.coatOfArms.svg})` }}>
                        <h3 className=""><span>Country:</span>{items.name.common}</h3>
                        <h4><span>Official Name:</span>{items.name.official}</h4>
                        {items.capital && <h4><span>Capital:</span>
                            {items.capital.map((capi) => {
                                return (
                                    <p>{capi}</p>
                                )
                            })}</h4>}
                        <h4><span>Continent:</span>{items.region}</h4>
                        <p><span>Currencies:</span>{Object.keys(items.currencies)}</p>
                        <p><span>Languages:</span>{Object.values(items.languages)}</p>
                        <h4><span>Area:</span>{items.area}</h4>
                        {items.borders && <h4><span>Borders:</span>
                            {items.borders.map((border) => {
                                return (
                                    <p>{border}</p>
                                )
                            })}</h4>}
                        <p><span>Population:</span>{items.population}</p>
                        <p><span>Time Zones</span>{items.timezones}</p>
                        <Image src={`${items.flags.svg}`} width={300} height={150} />
                    </div>
                )
            })}
        </div>
    )
}

export default officialName;
