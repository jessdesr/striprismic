"use client";

import { useRouter } from "next/navigation";

export const BackButton = ({ className }: { className?: string }): JSX.Element => {

  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={`pl-4 ${className}`}>
      ← go back
    </button>
  );
};
