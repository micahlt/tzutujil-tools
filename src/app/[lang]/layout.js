import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "../globals.css";
import NextTopLoader from "nextjs-toploader";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://dictionary.tzutujil.org"),
  title: "Tz'utujil.org Tools",

  description:
    "Learn Maya Tz'utujil better with interactive tools, and resources.",

  keywords:
    "Tzutujil dictionary,Tz'utujil dictionary,Tz'utujil diccionario,Tzutujil diccionario,Guatemala,translate Tzutujil,translate Tz'utujil,Tz'utujil translator,Tzutujil translator,learn Tzutujil,,Tzutujil language,Tzutujil database,Tz'utujil database,Tz'utujil,Tzutujil",

  openGraph: {
    images: ["https://dictionary.tzutujil.org/api/og"],
  },

  images: ["https://dictionary.tzutujil.org/api/og"],

  twitter: {
    card: "summary_large_image",
    title: "Tz'utujil.org Tools",
    description:
      "Learn Maya Tz'utujil better with interactive tools, and resources.",
    siteId: "1561359226819198976",
    creator: "@micahtlindley",
    creatorId: "1561359226819198976",
    images: ["https://dictionary.tzutujil.org/api/og"], // Must be an absolute URL
  },
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="#00f0a0" />
        {children}
      </body>
      <GoogleAnalytics gaId="G-4D30PF9DZY" />
    </html>
  );
}
