import type { AppProps } from "next/app";
import ResumeDownload from "../components/ResumeDownload";
import "../styles/globals.css";
import "../styles/profile-photo.css";
import "../styles/resume-download.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ResumeDownload />
    </>
  );
}
