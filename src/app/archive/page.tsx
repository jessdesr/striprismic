import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { BackButton } from "@/components/BackButton";
import { Archive } from "@/components/Archive";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return {
    title: `Archive - Blind Alley`,
    openGraph: {
      title: "Archive" || undefined,
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  // Fetch the current blog post page being displayed by the UID of the page
  const comics = await client.getAllByType("comic", {
    orderings: [{ field: "my.comic.publish_date", direction: "desc" }],
  });

  return (
    <Layout client={client}>
      <div className="text-center font-custom">
        <Archive comics={comics} />
      </div>
    </Layout>
  );
}
