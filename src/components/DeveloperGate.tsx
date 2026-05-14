"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DEVELOPER_HASH = "#developer";

export default function DeveloperGate() {
  const router = useRouter();

  useEffect(() => {
    const redirect = () => {
      if (window.location.hash === DEVELOPER_HASH) {
        router.push("/developer");
      }
    };

    redirect();
    window.addEventListener("hashchange", redirect);

    return () => window.removeEventListener("hashchange", redirect);
  }, [router]);

  return null;
}
