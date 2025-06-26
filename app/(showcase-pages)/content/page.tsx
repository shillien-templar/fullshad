import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Newspaper, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Content Components - FullShad",
    description: "Article layouts, blog components, and content management interfaces built with shadcn/ui. Copy-paste ready content UIs for your projects.",
    keywords: ["content", "articles", "blog", "content management", "shadcn", "react components"],
    openGraph: {
        title: "Content Components - FullShad",
        description: "Article layouts, blog components, and content management interfaces built with shadcn/ui.",
        type: "website",
        ...(process.env.NEXT_PUBLIC_URL && {
            url: `${process.env.NEXT_PUBLIC_URL}/content`,
        }),
    },
}

const subTypes = [
    {
        title: "Article Layouts",
        description: "Clean article reading experiences with typography and navigation",
        icon: FileText,
        href: "/content/article-layouts",
        count: 0,
        badge: "Coming Soon"
    },
    {
        title: "Blog Components",
        description: "Blog post layouts with author info, tags, and comment sections",
        icon: Newspaper,
        href: "/content/blog-components",
        count: 0,
        badge: "Coming Soon"
    },
    {
        title: "Content Cards",
        description: "Flexible content preview cards for listings and featured content",
        icon: CreditCard,
        href: "/content/content-cards",
        count: 0,
        badge: "Coming Soon"
    }
]

export default function ContentPage() {
    return (
        <div className="flex flex-1 flex-col gap-8 p-6">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Content</h1>
                        <p className="text-muted-foreground">
                            Articles, blogs, and content management interfaces
                        </p>
                    </div>
                </div>
            </div>

            {/* Sub-types Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subTypes.map((subType) => {
                    const IconComponent = subType.icon
                    const isAvailable = subType.count > 0
                    
                    return (
                        <Card key={subType.title} className="group hover:shadow-lg transition-all duration-200">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <IconComponent className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <CardTitle className="text-lg">{subType.title}</CardTitle>
                                                <Badge 
                                                    variant={isAvailable ? "default" : "secondary"}
                                                    className="text-xs"
                                                >
                                                    {subType.badge}
                                                </Badge>
                                            </div>
                                            <CardDescription className="text-sm">
                                                {subType.description}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        {subType.count} component{subType.count !== 1 ? 's' : ''}
                                    </span>
                                    <Button
                                        size="sm"
                                        variant={isAvailable ? "default" : "outline"}
                                        disabled={!isAvailable}
                                        asChild={isAvailable}
                                        className="ml-auto"
                                    >
                                        {isAvailable ? (
                                            <Link href={subType.href} className="flex items-center gap-1">
                                                View
                                                <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        ) : (
                                            "Coming Soon"
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Stats Section */}
            <div className="border-t pt-6">
                <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                        {subTypes.reduce((acc, subType) => acc + subType.count, 0)} total content components
                    </p>
                    <p className="text-xs text-muted-foreground">
                        More components coming soon
                    </p>
                </div>
            </div>
        </div>
    )
}