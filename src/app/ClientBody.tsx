"use client";

import { useEffect } from "react";

export function ClientBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    if (className) {
      document.body.className = `antialiased ${className}`;
    } else {
      document.body.className = "antialiased";
    }
  }, [className]);

  return <body suppressHydrationWarning className={`antialiased ${className || ""}`}>{children}</body>;
}
