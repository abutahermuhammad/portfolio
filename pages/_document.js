/** @format */

import { Head, Html, Main, NextScript } from "next/document";
import Meta from "../views/shared/Meta/Meta";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Common Meta Data */}
        <Meta />
        <meta name="theme-color" content="#000" />

        {/* Google Custom Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
