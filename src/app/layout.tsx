import { PrismicNextImage, PrismicNextLink, PrismicPreview } from "@prismicio/next";
import { repositoryName, createClient } from "@/prismicio";
import "./styles.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asDate } from "@prismicio/client";

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { uid: string }
}>) {
  const client = createClient();

  console.log({ params });
  // const comic = url !== "" ? await client.getByUID("comic", url) : undefined;
  // const date = comic && asDate(comic.data.publish_date)

  const siteDetails = await client.getSingle("site_details");
  const bgChangeDate = asDate(siteDetails.data.bg_change_date);

  return (
    <html lang="en">
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
    </html >
  );
}
