import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

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
    description: "A sit about stuff"
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

  // Get all of the blog_post documents created on Prismic ordered by publication date
  const posts = await client.getSingle("site_details");

  return (
    <>
      <div className="bg-tan w-full h-full">
        {JSON.stringify(latestComic)}
      </div>
    </>
  );
}
