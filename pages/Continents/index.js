// export async function getStaticProps() {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   const data = await res.json();
//   console.log(data, "data");

import Link from "next/link";
import { useRouter } from "next/router";

export const continents = [
    "Europe",
    "Americas",
    "Africa",
    "Oceania",
    "Asia",
    "Antarctic",
];

const Continents = () => {
    const router = useRouter();
    const continent = router.query.name;
    return (
        <>
            <div>continents</div>
            <img src="https://img.freepik.com/free-photo/global-globalization-world-map-environmental-concservation-concept_53876-120363.jpg?w=1380&t=st=1680545103~exp=1680545703~hmac=83dc36ce8309abc7ac82169f7d5bcb446789a602e530842833f7400e2575b497" width={1300} height={250} alt="worldmap" useMap="#worldmap" />
            {/* {continents.map((region, i) => {
                i++;
                return ( */}
            <map name="worldmap">
                <area shape="rect" coords="0,0,82,126" alt="continents" href={`/Continents/${continents[0]}`} className="bg-green-800 hover:bg-blue-600" />
                <area shape="rect" coords="34,44,270,350" alt="continents" href={`/Continents/${continents[1]}`} className="bg-green-800 hover:bg-blue-600" />
                <area shape="rect" coords="290,172,333,250" alt="continents" href={`/Continents/${continents[2]}`} className="bg-green-800 hover:bg-blue-600" />
            </map>
            {/* <Link href={`/Continents/${region}`} key={i}>
                        <h3 className="text-3xl">{region}</h3>
                    </Link>
                );
            })} */}
        </>
    );
};

export default Continents;
