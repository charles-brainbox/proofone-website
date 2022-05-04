export const HOME_QUERY = `
query {
  name(relativePath: "Home.mdx") {
    navbar {
      logo
      navitems {
        menutitle
        menulink
      }
      navbuttons {
        buttontitle
        buttonlink
      }
    }
    hero {
      herotitle
      herosubtitle
      herodescription
      herobutton {
        buttontitle
        buttonlink
      }
      heroimage
    }
    features {
      sectiontitle
      features {
        icon
        title
        subtitle
        description
      }
    }
    potentialuser {
      sectiontitle
      potentialusers {
        image
        title
        description
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
    footercto {
      cto
      ctobutton {
        buttontext
        buttonlink
      }
    }
    footer {
      logo
      address {
        title
        companyname
        companystreet
        companycity
        companycountry
      }
      otherdata {
        title
        body {
          item
          itemlink
        }
      }
    }
    id
  }
}
`;
