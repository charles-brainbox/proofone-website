import TinaProvider from "../.tina/components/TinaDynamicProvider";
import "../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import { PopupWidget } from "react-calendly";
import { CookieConsentComponent } from "../components/utils/CookieConsent.component";
import React from "react";

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const [rootElement, setrootElement] = React.useState<HTMLElement>(null);
  React.useEffect(() => {
    setrootElement(document.getElementById("__next"));
  }, []);

  return (
    <>
      <SSRProvider>
        <TinaProvider>
          <Component {...pageProps} />
          <PopupWidget
            url="https://calendly.com/charlesbrainbox805"
            color="var(--main-color)"
            text="Request a Demo"
            textColor="#ffffff"
            rootElement={rootElement}
          />
          <CookieConsentComponent />
        </TinaProvider>
      </SSRProvider>
    </>
  );
};

export default App;
