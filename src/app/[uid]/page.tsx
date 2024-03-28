import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Comic } from "@/components/Comic";
import { Layout } from "@/components/Layout";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("comic", params.uid)
    .catch(() => notFound());

  return {
    title: `${prismic.asText(page.data.title)} - Blind Alley`,
    openGraph: {
      title: prismic.asText(page.data.title) || undefined,
      images: [
        {
          url: page.data.mobile.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  // Fetch the current blog post page being displayed by the UID of the page
  const comic = await client
    .getByUID("comic", params.uid)
    .catch(() => notFound());

  const latestComic = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.publish_date", direction: "desc" }],
    limit: 1
  });
  const firstComic = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.publish_date", direction: "asc" }],
    limit: 1
  });
  const previousComic = comic.uid !== firstComic[0].uid ? await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.publish_date", direction: "desc" }],
    after: comic.id,
    limit: 1
  }) : undefined;
  const nextComic = comic.uid !== latestComic[0].uid ? await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.publish_date", direction: "asc" }],
    after: comic.id,
    limit: 1
  }) : undefined;
  // Get all of the blog_post documents created on Prismic ordered by publication date
  const posts = await client.getSingle("site_details");

  const date = prismic.asDate(comic.data.publish_date)

  const siteDetails = await client.getSingle("site_details");
  const bgChangeDate = prismic.asDate(siteDetails.data.bg_change_date);


  return (
    <Layout client={client} tanBackground={!!date && !!bgChangeDate && date < bgChangeDate}>
      <Comic
        comicData={comic.data}
        first={firstComic[0].uid !== comic.uid ? firstComic[0]?.url : undefined}
        latest={latestComic[0].uid !== comic.uid ? latestComic[0]?.url : undefined}
        previous={previousComic && previousComic[0].url}
        next={nextComic && nextComic[0].url}
      />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Comics from the API, except the homepage.
   */
  const pages = await client.getAllByType("comic");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}