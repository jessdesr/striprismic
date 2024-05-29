import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { PrismicRichText } from "@prismicio/react";
import { BackButton } from "@/components/BackButton";

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
  const page = await client.getSingle("about").catch(() => notFound());
  const details = await client.getSingle("site_details");

  return {
    title: `${page.data.meta_title} - ${details.data.meta_title}`,
    openGraph: {
      title: page.data.meta_title || undefined,
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  // Fetch the current blog post page being displayed by the UID of the page
  const page = await client.getSingle("about");

  const posts = await client.getSingle("site_details");

  return (
    <Layout client={client}>
      <div className="font-custom">
        <div className="mx-2">
          <BackButton />
        </div>
        <div className="mx-16">
          <PrismicRichText field={page.data.content} />
        </div>
      </div>
    </Layout>
  );
}
