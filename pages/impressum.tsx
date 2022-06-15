import Head from "next/head";
import LayoutComponent from "../components/layout/Layout.component";
import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import { IMPRESSUM_QUERY } from "../queries/queries";
import { ImpressumIndex } from "../components/sections/impressum/Impressum.index";

const Home = (props: { data: any }) => {
  const { data } = useTina({
    query: IMPRESSUM_QUERY,
    variables: {},
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>Proof one - Impressum</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Proof one website impressum" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LayoutComponent noHero>
        <ImpressumIndex data={data.impressum} />
      </LayoutComponent>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  let data: any = {};

  try {
    data = await staticRequest({
      query: IMPRESSUM_QUERY,

      variables: {},
    });
  } catch (error) {}
  return {
    props: {
      data,
    },
  };
}
