"use client";

import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { ComicDocument } from "../../../prismicio-types";
import Link from "next/link";
import { formatDateString } from "@/utils/formatDateString";
import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { BackButton } from "../BackButton";

export const Archive = ({
  comics,
}: {
  comics: ComicDocument[];
}): JSX.Element => {
  const [asList, setAsList] = useState<boolean>(false);

  useEffect(() => {
    setAsList(localStorage.getItem("asList") === "true");
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 my-4">
        <BackButton className="col-span-3 text-start pl-8" />
        <div className="col-span-6 flex">
          <div className="flex justify-end flex-1">
            <span className="mr-2">Gallery</span>
          </div>
          <Switch
            checked={asList}
            onChange={() => {
              localStorage.setItem("asList", `${!asList}`);
              setAsList((prevState) => !prevState);
            }}
            className="relative inline-flex items-center h-6 bg-gray-500 rounded-full w-11"
          >
            <span className="sr-only">Switch archive view</span>
            <span
              className={`${
                asList ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition duration-200 ease-in-out`}
            />
          </Switch>
          <div className="flex justify-start flex-1">
            <span className="ml-2">List</span>
          </div>
        </div>
      </div>
      <div
        className={`${asList ? "" : "grid grid-cols-2 gap-4 mx-4 sm:grid-cols-3 md:grid-cols-4"}`}
      >
        {comics.map((comic, index) => (
          <div key={index} className="w-full mx-auto underline cursor-pointer">
            <Link
              href={comic.url ? comic.url : ""}
              className={`${asList ? "mx-auto font-custom hover:text-gray-600" : ""}`}
            >
              {!asList && (
                <PrismicNextImage field={comic.data.thumbnail} fallbackAlt="" />
              )}
              <div className="mt-2 mb-4 md:text-xl">
                {prismic.asText(comic.data.title) +
                  `${comic.data.publish_date && `: ${formatDateString(comic.data.publish_date?.toString())}`}`}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* <div ref={loadRef}>
        {hasMore && loadMore && <div> SPINNER LOL LOADING </div>}
      </div> */}
    </>
  );
};
