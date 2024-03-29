import TinaProvider from "../.tina/components/TinaDynamicProvider";
import "../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import { PopupWidget } from "react-calendly";
import { CookieConsentComponent } from "../components/utils/CookieConsent.component";
import React from "react";
import Script from "next/script";

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const [rootElement, setrootElement] = React.useState<HTMLElement>(null);
  React.useEffect(() => {
    setrootElement(document.getElementById("__next"));
  }, []);

  return (
    <>
      <SSRProvider>
        <TinaProvider>
          <Script
            type="text/javascript"
            id="analytics"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGL4VHJ')`,
            }}
          ></Script>

          <Component {...pageProps} />
          <PopupWidget
            url="https://calendly.com/charlesbrainbox805"
            color="var(--main-color)"
            text="Request a Demo"
            textColor="#ffffff"
            rootElement={rootElement}
          />
          <a
            href="https://www.iubenda.com/privacy-policy/40248172"
            className="iubenda-white iubenda-noiframe iubenda-embed iub-legal-only iubenda-noiframe "
            title="Datenschutzerklärung "
          >
            Datenschutzerklärung
          </a>
          <Script
            type="text/javascript"
            id="datenschutz"
            dangerouslySetInnerHTML={{
              __html: `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false)}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader}})(window, document)`,
            }}
          ></Script>

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TGL4VHJ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </TinaProvider>
      </SSRProvider>
    </>
  );
};

export default App;
