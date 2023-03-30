import { continents } from "./Continents";

export async function getStaticPath() {
  let country = continents.map((contries) => {
    return {
      params: { region: contries },
    };
  });
  return {
    paths: country,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: region,
  };
}

const Countries = ({ region }) => {
  console.log(region, "region");
  return (
    <div>
      <div>country</div>
    </div>
  );
};

export default Countries;
