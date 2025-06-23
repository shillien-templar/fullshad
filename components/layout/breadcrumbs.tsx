import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export function LayoutBreadcrumbs({
    items,
}: {
    items: { title?: string; url?: string; separator?: boolean }[];
}) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, index) => {
                    if (item.separator) {
                        return (
                            <BreadcrumbSeparator key={index}/>
                        );
                    }
                    return (
                        <BreadcrumbItem key={index}>
                            {item.url ? (
                                <BreadcrumbLink href={item.url}>
                                    {item.title}
                                </BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage>
                                    {item.title}
                                </BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
