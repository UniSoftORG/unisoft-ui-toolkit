export interface IBreadcrumbItem {
  title: string;
  icon: string | undefined;
  slug: string;
  image: string | undefined; //this is an image URL
}

export interface IBreadcrumbs extends Array<IBreadcrumbItem> {}

export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  to: number;
  total: number;
  links?: { url: string | null; label: string; active: boolean }[];
  path: string;
  per_page: number;
}
