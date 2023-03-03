import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import store from "../store";
import "../public/assets/scss/components/index.scss";
import Seo from "../components/common/seo";

const progress = new ProgressBar({
  size: 4,
  color: "#3270FC",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Seo
        pageTitle=""
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <Provider store={store}>
        <ThemeProvider enableSystem={false} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
