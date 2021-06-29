import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <NextNprogress
        color="#01c68e"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
