// export async function getStaticProps() {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   const data = await res.json();
//   console.log(data, "data");

import Link from "next/link";

export const continents = [
    "Europe",
    "Americas",
    "Africa",
    "Oceania",
    "Asia",
    "Antarctic",
];

const Continents = () => {
    return (
        <>
            <div>continents</div>
            {continents.map((region, i) => {
                i++;
                return (
                    <Link href={`/Continents/${region}`} key={i}>
                        <h3 className="text-3xl">{region}</h3>
                    </Link>
                );
            })}
        </>
    );
};

export default Continents;
