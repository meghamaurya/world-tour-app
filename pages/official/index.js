
import { useEffect, useState } from "react";
// import { officialName } from "../[country]";
import Image from "next/image";
import { useRouter } from "next/router";

const OfficialConti = () => {
    const [countryDetail, setCountryDetail] = useState([]);
    // const officialContiName = officialName;
    const router = useRouter();
    useEffect(() => {
        const officialName = router?.query.offlicialName;
        const getData = async () => {
            const res = await fetch(
                `https://restcountries.com/v3.1/name/${officialName}?fullText=true`
            );
            const data = await res.json();
            setCountryDetail(data);
        };
        getData();
    }, [router.query?.offlicialName]);

    return (
        <>
            {countryDetail.length > 0 ? (
                <div className="bg-slate-400">
                    <Image
                        src={`${countryDetail[0].flags.svg}`}
                        width={500}
                        height={100}
                        className="mix-blend-screen w-full"
                        alt=""
                    />
                    <div className="absolute text-black top-1/4 mx-3">
                        <h2>Country name: {countryDetail[0].name.common}</h2>
                        <h3>Official name: {countryDetail[0].name.official}</h3>
                        {countryDetail[0].capital && (
                            <h3 className="flex gap-2">
                                Capital:
                                {countryDetail[0].capital.map((item, i) => {
                                    return <p key={i}>{item}</p>;
                                })}
                            </h3>
                        )}
                        <p>Continent: {countryDetail[0].region}</p>
                        <h3 className="flex gap-2">
                            Languages: {Object.values(countryDetail[0].languages)}
                        </h3>
                        <h3>Currencies: {Object.keys(countryDetail[0].currencies)}</h3>
                        <h4 className="flex gap-3">
                            Borders:
                            {countryDetail[0].borders &&
                                countryDetail[0].borders.map((item, i) => {
                                    return <p key={i}>{item},</p>;
                                })}
                        </h4>
                        <p>Area: {countryDetail[0].area}</p>
                        <p>
                            Time zones:{" "}
                            <span className="flex flex-col">
                                {countryDetail[0].timezones}
                            </span>
                        </p>
                        <p>Population: {countryDetail[0].population}</p>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
            {/* <Image src={`${list.coatOfArms.svg}`} width={50} height={20} /> */}
            {/* <img src={`${list.maps.googleMaps}`} width="100" height="50" /> */}
        </>
    );
};

export default OfficialConti;