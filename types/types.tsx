import { TinaMarkdownContent } from "tinacms/dist/rich-text";

export interface IHero {
  id: string;
  heroimage: string;
  herosubtitle: string;
  herotitle: string;
  herodescription: TinaMarkdownContent | TinaMarkdownContent[];
  herobutton: { buttontitle: string; buttonlink: string }[];
}

export interface IFeatures {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: TinaMarkdownContent | TinaMarkdownContent[];
}

export interface IPotentialUsers {
  sectiontitle: string;
  potentialusers: {
    image: string;
    title: string;
    description: TinaMarkdownContent | TinaMarkdownContent[];
    button: {
      buttontext: string;
      buttonlink: string;
    };
  }[];
}

export interface IFooterCto {
  sectionid: string;
  cto: string;
  ctobutton: { buttontext: string; buttonlink: string };
}

export interface IFooter {
  logo: string;
  address: {
    title: string;
    companyname: string;
    companystreet: string;
    companycity: string;
    companycountry: string;
  };
  otherdata: {
    title: string;
    body: { item: string; itemlink: string }[];
  }[];
}

export interface INav {
  logo: string;
  navitems: { menutitle: string; menulink: string }[];
  navbuttons: { buttontitle: string; buttonlink: string }[];
}
export interface IUseCase {
  id: string;
  title: string;
  description: TinaMarkdownContent | TinaMarkdownContent[];
}
export interface IOurApproach {
  id: string;
  title: string;
  description: TinaMarkdownContent | TinaMarkdownContent[];
}
