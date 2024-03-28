import { Metadata } from "next";

import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import Nav from "@/components/Nav/Nav";
import { formatDateString } from "@/utils/formatDateString";
import { Layout } from "@/components/Layout";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getSingle("site_details");

  // return {
  //   title: prismic.asText(home.data.title),
  //   description: home.data.meta_description,
  //   openGraph: {
  //     title: home.data.meta_title ?? undefined,
  //     images: [{ url: home.data.meta_image.url ?? "" }],
  //   },
  // };

  return {
    title: "Blind Alley",
    description: "A site about stuff"
  }
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();

  // Fetch the content of the home page from Prismic
  const latestComic = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.publish_date", direction: "desc" }],
    limit: 1
  });
  const comicDocument = latestComic[0];

  const firstComic = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.publish_date", direction: "asc" }],
    limit: 1
  });
  const previousComic = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.publish_date", direction: "desc" }],
    after: comicDocument.id,
    limit: 1
  });

  const { blog_post, desktop, mobile, publish_date, thumbnail } = comicDocument.data;

  const formattedDate = publish_date && formatDateString(publish_date.toString());

  const date = prismic.asDate(publish_date)

  const siteDetails = await client.getSingle("site_details");
  const bgChangeDate = prismic.asDate(siteDetails.data.bg_change_date);

  return (
    <Layout client={client} tanBackground={!!date && !!bgChangeDate && date < bgChangeDate}>
      <div
        className={`${blog_post.length > 0 ? "max-w-xl m-auto" : ""
          }`}
      >
        <PrismicNextImage field={desktop} className="hidden md:block" fallbackAlt="" />
        <PrismicNextImage field={mobile} className="hidden maxSm:block" fallbackAlt="" />
      </div>
      {blog_post.length > 0 && (
        <div className="py-4 mx-16 font-custom">
          <PrismicRichText field={blog_post} />
        </div>
      )}
      <Nav label={formattedDate || ""} links={{
        first: firstComic[0]?.url, previous: previousComic[0]?.url
      }} />
    </Layout>
  );
}
