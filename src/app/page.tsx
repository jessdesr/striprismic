import { Metadata } from "next";

import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import Nav from "@/components/Nav/Nav";
import { formatDateString } from "@/utils/formatDateString";
import { Layout } from "@/components/Layout";
import Link from "next/link";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getSingle("site_details");

  return {
    title: home.data.meta_title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();

  // Fetch the content of the home page from Prismic
  const latestComic = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.page_number", direction: "desc" }],
    limit: 1,
  });

  const firstComic = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.page_number", direction: "asc" }],
    limit: 1,
  });
  const comicDocument = firstComic[0];

  const nextComic = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.page_number", direction: "asc" }],
    after: comicDocument.id,
    limit: 1,
  });

  const { blog_post, desktop, title } = comicDocument.data;

  return (
    <Layout client={client}>
      <div
        className={`${blog_post.length > 0 ? "max-w-xl m-auto" : "max-w-3xl m-auto"}`}
      >
        {nextComic[0] ? (
          <Link href={nextComic[0].url!}>
            <PrismicNextImage
              field={desktop}
              className="block"
              fallbackAlt=""
            />
          </Link>
        ) : (
          <PrismicNextImage field={desktop} className="block" fallbackAlt="" />
        )}
      </div>
      {blog_post.length > 0 && (
        <div className="py-4 mx-16 font-custom">
          <PrismicRichText field={blog_post} />
        </div>
      )}
      <Nav
        label={title[0]?.text || ""}
        links={{
          latest: latestComic[0]?.url,
          next: nextComic[0]?.url,
        }}
      />
    </Layout>
  );
}
