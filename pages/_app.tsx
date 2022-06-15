import TinaProvider from "../.tina/components/TinaDynamicProvider";
import "../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  return (
    <SSRProvider>
      <TinaProvider>
        <Component {...pageProps} />
      </TinaProvider>
    </SSRProvider>
  );
};

export default App;
