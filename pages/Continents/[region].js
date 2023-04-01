import Link from "next/link";
import { useRouter } from "next/router";
import { continents } from "./index";

export async function getStaticPaths() {
  let value = continents.map((item) => {
    return {
      params: { region: item },
    };
  });

  return {
    paths: value,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const current = context.params.region;
  const res = await fetch(`https://restcountries.com/v3.1/region/${current}`);
  const countryName = await res.json();
  return {
    props: { country: countryName },
  };
}

const Countries = ({ country }) => {
  const router = useRouter();
  const continentName = router.query.region;

  return (
    <div>
      <h3 className="text-2xl">Countries of {continentName}</h3>
      {country.map((contiList, i) => {
        return (
          <Link key={i} href={`/${contiList.name.common}`} className="grid grid-cols-2 gap-3">
            <h3>{contiList.name.common}</h3>
            <p>{contiList.capital}</p>
          </Link>
        )
      })}
    </div>
  );
};

export default Countries;
