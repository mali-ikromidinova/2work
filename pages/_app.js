import "../styles/arrows.css";
import "../styles/tabs.css";
import { GlobalStyle } from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
