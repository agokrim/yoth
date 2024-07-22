import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="The free Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "The free Youtube Thumbnail Downloader !",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-D466SRX2FY" />
      <Analytics />
    </Fragment>
  );
}

export default MyApp;
