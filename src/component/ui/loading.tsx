"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-neutral-100 ">
      <span className="relative flex h-14 w-14  opacity-75">
        <span className="animate-bounce absolute inline-flex h-full w-full rounded-full  opacity-75">
          <img
            className="mx-auto "
            src="https://space.baianat.com/assets/erpnext/images/erpnext-logo.svg"
            alt="Your Company"
          />
        </span>
      </span>
    </div>
  );
}
