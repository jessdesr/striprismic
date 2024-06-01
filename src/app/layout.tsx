import {
  PrismicNextImage,
  PrismicNextLink,
  PrismicPreview,
} from "@prismicio/next";
import { repositoryName, createClient } from "@/prismicio";
import "./styles.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asDate } from "@prismicio/client";
import { Didact_Gothic } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const didact = Didact_Gothic({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-didact-gothic",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { uid: string };
}>) {
  return (
    <html lang="en" className={`${didact.variable}`}>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="./assets/icon.png"
        />
      </head>
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
      {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
      <SpeedInsights />
    </html>
  );
}
