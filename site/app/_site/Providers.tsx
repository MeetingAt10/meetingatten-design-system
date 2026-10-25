"use client";
import { useRouter } from "next/navigation";
import { DesignSystemProvider, ToastRegion } from "@meetingat10/design-system/react";

/** Client-side routing for every design system link, motion defaults, and the toast region. */
export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <DesignSystemProvider navigate={router.push} locale="en-PH">
      {children}
      <ToastRegion />
    </DesignSystemProvider>
  );
}
