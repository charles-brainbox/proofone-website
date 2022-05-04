import "../styles.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;
