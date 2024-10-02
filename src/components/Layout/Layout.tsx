import { Client, Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export const Layout = async ({
  className,
  client,
  whiteBackground,
  children,
}: {
  className?: string;
  client: Client<Content.AllDocumentTypes>;
  whiteBackground: boolean;
  children: React.ReactNode;
}): Promise<JSX.Element> => {
  const siteDetails = await client.getSingle("site_details");

  return (
    <div
      className={`${className} ${
        whiteBackground ? "bg-white" : "bg-tan"
      } overflow-auto`}
    >
      <div className="flex flex-col h-screen py-4 mx-auto max-w-screen-2xl">
        <header className="flex flex-col items-center">
          <Link href="/">
            <PrismicNextImage
              field={siteDetails.data.banner_image}
              fallbackAlt=""
              className="hidden md:block"
            />
            <PrismicNextImage
              field={siteDetails.data.banner_mobile}
              fallbackAlt=""
              className="hidden maxSm:block"
            />
          </Link>
          <div className="w-full flex flex-row justify-evenly text-2xl">
            <Link
              href={"/archive"}
              className="flex items-center space-x-2 uppercase font-custom hover:text-gray-600"
            >
              Archive
            </Link>
            <Link
              href={"/about"}
              className="flex items-center space-x-2 uppercase font-custom hover:text-gray-600"
            >
              About
            </Link>
          </div>
        </header>
        {children}
        <footer className="py-2 mt-auto text-center ">
          <div className="flex justify-center gap-8">
            {siteDetails.data.social_media.map((smInfo) => {
              return smInfo.url.link_type === "Web" ? (
                <PrismicNextLink
                  key={smInfo.name}
                  field={smInfo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 uppercase font-custom hover:text-gray-600"
                >
                  <PrismicNextImage
                    className="w-10"
                    field={smInfo.icon}
                    fallbackAlt=""
                  />
                  <div className="hidden md:block font-custom">
                    {smInfo.name}
                  </div>
                </PrismicNextLink>
              ) : (
                <PrismicNextLink
                  key={smInfo.name}
                  field={smInfo.url}
                  className="flex items-center space-x-2 uppercase font-custom hover:text-gray-600"
                >
                  <PrismicNextImage
                    className="w-10"
                    field={smInfo.icon}
                    fallbackAlt=""
                  />
                  <div className="hidden md:block font-custom">
                    {smInfo.name}
                  </div>
                </PrismicNextLink>
              );
            })}
          </div>
          <div className="mt-4 text-xs font-light text-gray-500">
            © Blind Alley {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  );
};
