import type { NextPage } from "next";
import Head from "next/head";
import FeaturesComponent from "../components/sections/Features.component";
import FooterBannerComponent from "../components/sections/FooterBanner.component";
import LayoutComponent from "../components/layout/Layout.component";
import PotentialusersComponent from "../components/sections/Potentialusers.component";
import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import { HOME_QUERY } from "../queries/queries";
import { UseCasesComponent } from "../components/sections/UseCases.component";
import { OurApproachComponent } from "../components/sections/OurApproach.component";

const Home = (props: { data: any }) => {
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

      <LayoutComponent hero={data.name.hero}>
        <main>
          <UseCasesComponent data={data.name.usecases} />
          <PotentialusersComponent data={data.name.potentialuser} />
          <FeaturesComponent data={data.name.features} />
          <OurApproachComponent data={data.name.ourapproach} />
          <FooterBannerComponent data={data.name.footercto} />
        </main>
      </LayoutComponent>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  let data: any = {};

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
