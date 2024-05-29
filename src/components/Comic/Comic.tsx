import { PrismicRichText } from "@prismicio/react";
import { ComicDocumentData } from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import Nav from "../Nav/Nav";
import { formatDateString } from "@/utils/formatDateString";
import Link from "next/link";

interface ComicProps {
  comicData: ComicDocumentData;
  previous?: string | null;
  first?: string | null;
  latest?: string | null;
  next?: string | null;
}

const ImageGroup = ({ desktop }: Pick<ComicDocumentData, "desktop">) => (
  <>
    <PrismicNextImage
      field={desktop}
      className="block"
      fallbackAlt=""
      placeholder="blur"
      blurDataURL="https://img.freepik.com/free-vector/exotic-fish-set_1284-16546.jpg"
    />
  </>
);

export const Comic = ({
  comicData,
  previous,
  next,
  latest,
  first,
}: ComicProps): JSX.Element => {
  const { blog_post, desktop, title } = comicData;

  return (
    <>
      <div
        className={`${blog_post.length > 0 ? "max-w-xl m-auto" : "max-w-3xl m-auto"}`}
      >
        {next ? (
          <Link href={next}>
            <ImageGroup desktop={desktop} />
          </Link>
        ) : (
          <ImageGroup desktop={desktop} />
        )}
      </div>
      {blog_post.length > 0 && (
        <div className="py-4 mx-16 font-custom">
          <PrismicRichText field={blog_post} />
        </div>
      )}
      <Nav
        label={prismic.asText(title) || ""}
        links={{
          first,
          previous,
          latest,
          next,
        }}
      />
    </>
  );
};
