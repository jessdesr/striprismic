import { PrismicRichText } from "@prismicio/react";
import { ComicDocumentData } from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import Nav from "../Nav/Nav";
import { formatDateString } from "@/utils/formatDateString";

interface ComicProps {
  comicData: ComicDocumentData,
  previous?: string | null,
  first?: string | null,
  latest?: string | null,
  next?: string | null,
};


export const Comic = ({ comicData, previous, next, latest, first }: ComicProps): JSX.Element => {

  const { blog_post, desktop, mobile, publish_date } = comicData;
  const formattedDate = publish_date && formatDateString(publish_date.toString());

  return (
    <>
      <div
        className={`${blog_post.length > 0 ? "max-w-xl m-auto" : ""
          }`}
      >
        <PrismicNextImage field={desktop} className="hidden md:block" fallbackAlt="" />
        <PrismicNextImage field={mobile} className="hidden maxSm:block" fallbackAlt="" />
      </div>
      {
        blog_post.length > 0 && (
          <div className="py-4 mx-16 font-custom">
            <PrismicRichText field={blog_post} />
          </div>
        )
      }
      <Nav label={formattedDate || ""} links={{
        first, previous, latest, next
      }} />
    </>
  );
};
