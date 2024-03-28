import { PrismicNextImage, PrismicPreview } from "@prismicio/next";
import { repositoryName, createClient } from "@/prismicio";
import "./styles.css";
import Link from "next/link";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const client = createClient();

  const siteDetails = await client.getSingle("site_details");

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body className="bg-tan flex flex-col justify-center items-center h-screen mx-auto w-full">
        <div className="bg-tan max-w-7xl min-h-screen border-gray-200 p-12 w-full flex flex-col gap-20 items-cente">
          <header className="flex flex-col items-center">
            <PrismicNextImage field={siteDetails.data.banner_image} />
            <div className="w-full flex flex-row justify-evenly text-2xl">
              <Link href={"/archive"} className="flex items-center space-x-2 uppercase font-custom hover:text-gray-600">Archive</Link>
              <Link href={"/about"} className="flex items-center space-x-2 uppercase font-custom hover:text-gray-600">About</Link>
            </div>
          </header>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </div>
      </body>
    </html>
  );
}
