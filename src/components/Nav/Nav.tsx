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
    previous?: any;
    next?: any;
    first?: any;
    latest?: any;
  };
}

const CustomLink = ({
  href,
  children,
}: {
  href: Url;
  children: React.ReactNode;
}) => {
  if (href) {
    return (
      <Link href={href} className={"text-primaryText"}>
        {children}
      </Link>
    );
  } else {
    return <span className="text-gray-300">{children}</span>;
  }
};

const Nav = ({ label, links = {} }: NavProps) => {
  const { previous, next, first, latest } = links;
  const router = useRouter();
  useKeyPress("ArrowRight", () => {
    next && router.push(next);
  });
  useKeyPress("ArrowLeft", () => {
    previous && router.push(previous);
  });
  return (
    <div className="flex flex-wrap items-center w-full max-w-2xl m-auto transition-transform justify-evenly">
      <CustomLink href={first}>
        <ChevronDoubleLeftIcon className="h-10" />
      </CustomLink>

      <CustomLink href={previous}>
        <ChevronLeftIcon className="h-10" />
      </CustomLink>

      <span className="text-xl uppercase font-custom">{label}</span>

      <CustomLink href={next}>
        <ChevronRightIcon className="h-10" />
      </CustomLink>

      <CustomLink href={latest}>
        <ChevronDoubleRightIcon className="h-10" />
      </CustomLink>
    </div>
  );
};

export default Nav;
