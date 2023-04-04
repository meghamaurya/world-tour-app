import Image from "next/image";

export async function getStaticPaths() {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    let value = data.map((conti) => {
        return {
            params: { countries: conti.name.common }
        }
    })

    return {
        paths: value,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const current = context.params.countries;
    const res = await fetch(`https://restcountries.com/v3.1/name/${current}`);
    const countryName = await res.json();
    console.log(countryName, "length")
    return {
        props: { country: countryName },
    };
}

const contries = ({ country }) => {

    return (
        <div>
            {country.length > 1 ?
                <>
                    {country.map((items, i) => {
                        return (
                            <div key={i}>
                                <h3><span>Country</span>{items.name.common}</h3>
                                {/* <h4><span>Capital</span>{items.capital}</h4>
                                <h4><span>Official Name</span>{items.name.official}</h4>
                                <p><span>Currencies</span>{items.currencies}</p> */}
                                <p></p>
                            </div>
                        )
                    })}
                </>
                :
                <>
                    {country.map((items, j) => {
                        return (
                            // <div key={j} style={{ backgroundImage: `url(${items.coatOfArms.svg.toString()})` }}>
                            <div key={j} className=" bg-contain bg-center bg-no-repeat bg-blend-lighten" style={{ backgroundImage: `url(${items.coatOfArms.svg})` }}>
                                <h3 className=""><span>Country:</span>{items.name.common}</h3>
                                <h4><span>Official Name:</span>{items.name.official}</h4>
                                <h4><span>Capital:</span>
                                    {items.capital.map((capi) => {
                                        return (
                                            <p>{capi}</p>
                                        )
                                    })}</h4>
                                <h4><span>Continent:</span>{items.region}</h4>
                                <p><span>Currencies:</span>{Object.keys(items.currencies)}</p>
                                <p><span>Languages:</span>{Object.values(items.languages)}</p>
                                <h4><span>Area:</span>{items.area}</h4>
                                <h4><span>Borders:</span>
                                    {items.borders.map((border) => {
                                        return (
                                            <p>{border}</p>
                                        )
                                    })}</h4>
                                <p><span>Population:</span>{items.population}</p>
                                <p><span>Time Zones</span>{items.timezones}</p>
                                <Image src={`${items.flags.svg}`} width={300} height={150} />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default contries
