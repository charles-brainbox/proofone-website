import { defineSchema, defineConfig } from "tinacms";

const schema = defineSchema({
  collections: [
    {
      label: "Authors",
      name: "author",
      path: "content/authors",
      format: "md",
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Avatar",
          name: "avatar",
        },
      ],
    },
    {
      label: "Home",
      name: "name",
      path: "content/home",
      format: "mdx",
      fields: [
        {
          label: "Navbar",
          name: "navbar",
          type: "object",
          fields: [
            {
              label: "Logo",
              name: "logo",
              type: "image",
            },
            {
              label: "Nav Items",
              name: "navitems",
              type: "object",
              list: true,
              fields: [
                { label: "Menu Title", name: "menutitle", type: "string" },
                { label: "Menu Link", name: "menulink", type: "string" },
              ],
            },
            {
              label: "Nav Buttons",
              name: "navbuttons",
              type: "object",
              list: true,
              fields: [
                { label: "Button Title", name: "buttontitle", type: "string" },
                { label: "Button Link", name: "buttonlink", type: "string" },
              ],
            },
          ],
        },
        {
          label: "Hero",
          name: "hero",
          type: "object",

          fields: [
            { type: "string", label: "Hero Title", name: "herotitle" },
            { type: "string", label: "Hero Subtitle", name: "herosubtitle" },
            {
              type: "rich-text",
              label: "Hero Description",
              name: "herodescription",
            },
            {
              type: "object",
              label: "Hero Button",
              name: "herobutton",
              list: true,
              fields: [
                { type: "string", label: "Button Title", name: "buttontitle" },
                { type: "string", label: "Button Link", name: "buttonlink" },
              ],
            },
            {
              type: "image",
              label: "Hero Image",
              name: "heroimage",
            },
          ],
        },

        {
          label: "Features",
          name: "features",
          type: "object",
          fields: [
            { type: "string", label: "Section Title", name: "sectiontitle" },
            {
              type: "object",
              label: "Features",
              name: "features",
              list: true,
              fields: [
                {
                  type: "image",
                  label: "Icon",
                  name: "icon",
                },
                {
                  type: "string",
                  label: "Title",
                  name: "title",
                },
                {
                  type: "string",
                  label: "Sub Title",
                  name: "subtitle",
                },
                {
                  type: "rich-text",
                  label: "Description",
                  name: "description",
                },
              ],
            },
          ],
        },
        {
          label: "Potential Users of Proofone",
          name: "potentialuser",
          type: "object",
          fields: [
            { type: "string", label: "Section Title", name: "sectiontitle" },
            {
              type: "object",
              label: "Potential Users",
              name: "potentialusers",
              list: true,
              fields: [
                {
                  type: "image",
                  label: "Card Image",
                  name: "image",
                },
                {
                  type: "string",
                  label: "Title",
                  name: "title",
                },
                {
                  type: "rich-text",
                  label: "Description",
                  name: "description",
                },
                {
                  type: "object",
                  label: "Button",
                  name: "button",
                  fields: [
                    {
                      type: "string",
                      label: "Button text",
                      name: "buttontext",
                    },
                    {
                      type: "string",
                      label: "Button Link",
                      name: "buttonlink",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Other Products",
          name: "otherproducts",
          type: "object",
          fields: [
            {
              type: "object",
              label: "Product Logo",
              name: "productlogo",
              list: true,
              fields: [
                { type: "image", label: "Product Logo", name: "productlogo" },
              ],
            },
          ],
        },
        {
          label: "Footer CTO",
          name: "footercto",
          type: "object",

          fields: [
            { type: "string", label: "Call to Action", name: "cto" },
            {
              type: "object",
              label: "CTO Button",
              name: "ctobutton",
              fields: [
                { type: "string", label: "Button text", name: "buttontext" },
                { type: "string", label: "Button Link", name: "buttonlink" },
              ],
            },
          ],
        },
        {
          label: "Footer",
          name: "footer",
          type: "object",
          fields: [
            {
              label: "Logo",
              name: "logo",
              type: "image",
            },
            {
              type: "object",
              label: "Address",
              name: "address",
              fields: [
                { type: "string", label: "Title", name: "title" },
                { type: "string", label: "Company name", name: "companyname" },
                {
                  type: "string",
                  label: "Company Street",
                  name: "companystreet",
                },
                { type: "string", label: "Company City", name: "companycity" },
                {
                  type: "string",
                  label: "Company Country",
                  name: "companycountry",
                },
              ],
            },
            {
              label: "Other Data",
              name: "otherdata",
              type: "object",
              list: true,
              fields: [
                {
                  label: "Title",
                  name: "title",
                  type: "string",
                },
                {
                  label: "Body",
                  name: "body",
                  type: "object",
                  list: true,
                  fields: [
                    { type: "string", label: "Item", name: "item" },
                    { type: "string", label: "Item Link", name: "itemlink" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // Test schema
    {
      label: "Sample Home",
      name: "samplehome",
      path: "content/samplehome",
      format: "mdx",
      fields: [
        {
          label: "Navbar",
          name: "navbar",
          type: "object",
          fields: [
            {
              label: "Logo",
              name: "logo",
              type: "image",
            },
            {
              label: "Nav Items",
              name: "navitems",
              type: "object",
              list: true,
              fields: [
                { label: "Menu Title", name: "menutitle", type: "string" },
                { label: "Menu Link", name: "menulink", type: "string" },
              ],
            },
            {
              label: "Nav Buttons",
              name: "navbuttons",
              type: "object",
              list: true,
              fields: [
                { label: "Button Title", name: "buttontitle", type: "string" },
                { label: "Button Link", name: "buttonlink", type: "string" },
              ],
            },
          ],
        },
        {
          label: "Hero",
          name: "hero",
          type: "object",

          fields: [
            { type: "string", label: "Hero Title", name: "herotitle" },
            { type: "string", label: "Hero Subtitle", name: "herosubtitle" },
            {
              type: "rich-text",
              label: "Hero Description",
              name: "herodescription",
            },
            {
              type: "object",
              label: "Hero Button",
              name: "herobutton",
              list: true,
              fields: [
                { type: "string", label: "Button Title", name: "buttontitle" },
                { type: "string", label: "Button Link", name: "buttonlink" },
              ],
            },
            {
              type: "image",
              label: "Hero Image",
              name: "heroimage",
            },
          ],
        },

        {
          label: "Features",
          name: "features",
          type: "object",
          fields: [
            { type: "string", label: "Section Title", name: "sectiontitle" },
            {
              type: "object",
              label: "Features",
              name: "features",
              list: true,
              fields: [
                {
                  type: "image",
                  label: "Icon",
                  name: "icon",
                },
                {
                  type: "string",
                  label: "Title",
                  name: "title",
                },
                {
                  type: "string",
                  label: "Sub Title",
                  name: "subtitle",
                },
                {
                  type: "rich-text",
                  label: "Description",
                  name: "description",
                },
              ],
            },
          ],
        },
        {
          label: "Potential Users of Proofone",
          name: "potentialuser",
          type: "object",
          fields: [
            { type: "string", label: "Section Title", name: "sectiontitle" },
            {
              type: "object",
              label: "Potential Users",
              name: "potentialusers",
              list: true,
              fields: [
                {
                  type: "object",
                  label: "Users",
                  name: "users",
                  fields: [
                    {
                      type: "image",
                      label: "Card Image",
                      name: "image",
                    },
                    {
                      type: "string",
                      label: "Title",
                      name: "title",
                    },

                    {
                      type: "rich-text",
                      label: "Description",
                      name: "description",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Other Products",
          name: "otherproducts",
          type: "object",
          fields: [
            {
              type: "object",
              label: "Product Logo",
              name: "productlogo",
              list: true,
              fields: [
                { type: "image", label: "Product Logo", name: "productlogo" },
              ],
            },
          ],
        },
        {
          label: "Footer CTO",
          name: "footercto",
          type: "object",

          fields: [
            { type: "string", label: "Call to Action", name: "cto" },
            {
              type: "object",
              label: "CTO Button",
              name: "ctobutton",
              fields: [
                { type: "string", label: "Button text", name: "buttontext" },
                { type: "string", label: "Button Link", name: "buttonlink" },
              ],
            },
          ],
        },
        {
          label: "Footer",
          name: "footer",
          type: "object",
          fields: [
            {
              type: "object",
              label: "Address",
              name: "address",
              fields: [
                { type: "string", label: "Title", name: "title" },
                { type: "string", label: "Company name", name: "companyname" },
                {
                  type: "string",
                  label: "Company Street",
                  name: "companystreet",
                },
                { type: "string", label: "Company City", name: "companycity" },
                {
                  type: "string",
                  label: "Company Country",
                  name: "companycountry",
                },
              ],
            },
            {
              label: "Other Data",
              name: "otherdata",
              type: "object",
              list: true,
              fields: [
                {
                  label: "Title",
                  name: "title",
                  type: "string",
                },
                {
                  label: "Body",
                  name: "body",
                  type: "object",
                  list: true,
                  fields: [
                    { type: "string", label: "Item", name: "item" },
                    { type: "string", label: "Item Link", name: "itemlink" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const branch = "https://github.com/charles-brainbox/proofone-website";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  mediaStore: async () => {
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  cmsCallback: (cms) => {
    /**
     * Enables experimental branch switcher
     */
    cms.flags.set("branch-switcher", true);

    /**
     * When `tina-admin` is enabled, this plugin configures contextual editing for collections
     */
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["authors", "global"].includes(collection.name)) {
          return undefined;
        }
        if (["pages"].includes(collection.name)) {
          if (document.sys.filename === "home") {
            return `/`;
          }
          if (document.sys.filename === "about") {
            return `/about`;
          }
          return undefined;
        }
        return `/${collection.name}/${document.sys.filename}`;
      });
      cms.plugins.add(RouteMapping);
    });

    return cms;
  },
  formifyCallback: ({ formConfig, createForm, createGlobalForm }) => {
    if (formConfig.id === "content/global/index.json") {
      return createGlobalForm(formConfig);
    }

    return createForm(formConfig);
  },
});

export default schema;
