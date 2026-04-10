import type { ReactNode } from "react";
import type { ManagedPageKey } from "@shared/page-settings";
import NotFound from "@/pages/not-found";
import { usePageSettings } from "@/lib/pageSettings";

export default function PageAccessGate({
  pageKey,
  children,
}: {
  pageKey: ManagedPageKey;
  children: ReactNode;
}) {
  const { data, isLoading } = usePageSettings();

  if (isLoading || !data) {
    return null;
  }

  const setting = data.find((item) => item.key === pageKey);
  if (!setting || setting.isEnabled !== "true") {
    return <NotFound />;
  }

  return <>{children}</>;
}
