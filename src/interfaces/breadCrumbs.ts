export interface IBreadcrumbItem {
    title: string;
    icon: string | undefined;
    slug: string;
    image: string | undefined; //this is an image URL
}

export interface IBreadcrumbs extends Array<IBreadcrumbItem>{}
