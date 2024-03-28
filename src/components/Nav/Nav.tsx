"use client";

import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/16/solid";
import { useKeyPress } from "../../utils/helpers";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Url } from "url";

interface NavProps {
  label: string;
  links: {
    prev?: any;
    next?: any;
    first?: any;
    latest?: any;
  }
}

const CustomLink = ({ href, children }: { href: Url, children: React.ReactNode }) => {
  if (href) {
    return (<Link href={href} className={"text-black"}>{children}</Link>)
  } else {
    return <span className="text-gray-300">{children}</span>
  }
}

const Nav = ({ label, links = {} }: NavProps) => {
  const { prev, next, first, latest } = links;
  const router = useRouter();
  useKeyPress("ArrowRight", () => { next && router.push(next) })
  useKeyPress("ArrowLeft", () => { prev && router.push(prev) })
  return (
    <div className="flex flex-wrap items-center w-full transition-transform justify-evenly">
      <CustomLink href={first}>
        <ChevronDoubleLeftIcon className="h-10" />
      </CustomLink>

      <CustomLink href={prev}>
        <ChevronLeftIcon className="h-10" />
      </CustomLink>

      <span className="text-xl uppercase font-custom">{label}</span>

      <CustomLink href={next}>
        <ChevronRightIcon className="h-10" />
      </CustomLink>

      <CustomLink href={latest}>
        <ChevronDoubleRightIcon className="h-10" />
      </CustomLink>

      {/* <img src={firstIcon} className="h-4" />
      <img src={prevIcon} className="h-4" />
      <img src={nextIcon} className="h-4" />
      <img src={latestIcon} className="h-4" /> */}
    </div>
  );
};

export default Nav;
