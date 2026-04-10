import { useQuery } from "@tanstack/react-query";
import { MANAGED_PAGES, type ManagedPageKey } from "@shared/page-settings";

export type PageSettingRecord = {
  id: string;
  key: ManagedPageKey;
  label: string;
  href: string;
  isEnabled: string;
  updatedAt: string;
};

export function usePageSettings() {
  return useQuery<PageSettingRecord[]>({
    queryKey: ["/api/page-settings"],
  });
}

export function useVisiblePages() {
  const query = usePageSettings();
  const enabledKeys = new Set(
    (query.data ?? [])
      .filter((item) => item.isEnabled === "true")
      .map((item) => item.key),
  );

  return {
    ...query,
    navigationPages: MANAGED_PAGES.filter((page) => page.showInNavigation && enabledKeys.has(page.key)),
    footerPages: MANAGED_PAGES.filter((page) => page.showInFooter && enabledKeys.has(page.key)),
    isPageEnabled: (key: ManagedPageKey) => enabledKeys.has(key),
  };
}
