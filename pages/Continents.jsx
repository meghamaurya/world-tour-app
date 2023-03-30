// export async function getStaticProps() {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   const data = await res.json();
//   console.log(data, "data");

import Link from "next/link";

//   return { props: { data } };
// }

export const continents = [
  "Europe",
  "Americas",
  "Africa",
  "Oceania",
  "Asia",
  "Antarctic",
];

const Continents = ({ data }) => {
  return (
    <>
      <div>continents</div>
      {continents.map((items, i) => {
        i++;
        return (
          <Link href={`/Continents/${items.region}`} key={i}>
            <h3>{items}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default Continents;
