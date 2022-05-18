import TinaProvider from "../.tina/components/TinaDynamicProvider";
import "../styles/globals.css";

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;
