export const HOME_QUERY = `
query {
  name(relativePath: "Home.mdx") {

    hero {
      herotitle
      herosubtitle
      sectionid
      herodescription
      herobutton {
        buttontitle
        buttonlink
      }
      heroimage
    }
    usecases {
      sectiontitle
      sectionid
      sideimage
      usecases {
        title
        description
      }
    }
    features {
      sectiontitle
      sectionid
      topimage
      features {
        icon
        title
        subtitle
        description
      }
    }
    potentialuser {
      sectiontitle
      sectionid
      potentialusers {
        title
        description
        image
        button {
          buttontext
          buttonlink
        }
      }
    }
    otherproducts {
      productlogo {
        productlogo
      }
    }
    ourapproach {
      sectiontitle
      sectionid
      sideimage
      ourapproach {
        title
        description
      }
    }
    footercto {
      cto
      sectionid
      ctobutton {
        buttontext
        buttonlink
      }
    }
    id
    _sys {
      breadcrumbs
    }
  }
}
`;
export const IMPRESSUM_QUERY = `
query MyQuery {
  impressum(relativePath: "Impressum.mdx") {
    title
    description
    id
    _sys {
      filename
      title
    }
  }
}
`;
