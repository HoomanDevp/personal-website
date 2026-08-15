import Head from "next/head";
import type { AppProps } from "next/app";
import ResumeDownload from "../components/ResumeDownload";
import "../styles/globals.css";
import "../styles/profile-photo.css";
import "../styles/resume-download.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://hoomandevp.github.io/" key="og:url" />
        <link rel="canonical" href="https://hoomandevp.github.io/" key="canonical" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" key="favicon" />
      </Head>
      <Component {...pageProps} />
      <ResumeDownload />
    </>
  );
}
