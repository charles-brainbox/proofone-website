import type { NextPage } from "next";
import Head from "next/head";
import FeaturesComponent from "../components/sections/Features.component";
import FooterBannerComponent from "../components/sections/FooterBanner.component";
import HeroComponent from "../components/sections/Hero.component";
import LayoutComponent from "../components/layout/Layout.component";
import OtherProductsComponent from "../components/sections/OtherProducts.component";
import PotentialusersComponent from "../components/sections/Potentialusers.component";
import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import { HOME_QUERY } from "../queries/queries";

const Home = (props) => {
  const { data } = useTina({
    query: HOME_QUERY,
    variables: {},
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>Proof one</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Proof one website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LayoutComponent footer={data.name.footer} nav={data.name.navbar}>
        <main>
          <HeroComponent data={data.name.hero} />
          <FeaturesComponent data={data.name.features} />
          <PotentialusersComponent data={data.name.potentialuser} />
          <OtherProductsComponent />
          <FooterBannerComponent data={data.name.footercto} />
        </main>
      </LayoutComponent>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  let data = {};

  try {
    data = await staticRequest({
      query: HOME_QUERY,
      variables: {},
    });
  } catch (error) {}
  return {
    props: {
      data,
    },
  };
}
