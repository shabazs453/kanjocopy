import { useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const initPreline = async () => {
      await import("preline");
    };
    initPreline();
  }, []);

  <Head>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta name="theme-color" content="#f1f5f9" />
    {process.env.NEXT_PUBLIC_ENV === "development" && (
      <meta name="robots" content="noindex,nofollow" />
    )}
    <meta name="referrer" content="origin" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title key="title">Kanjo</title>
    <meta
      key="description"
      name="description"
      content="Powered by GPT-4, Storywiz helps you absorb key takeaways from stories faster by generating captivating visual stories and bite-sized AI summary from any text article."
    />
  </Head>;

  return <Component {...pageProps} />;
}
