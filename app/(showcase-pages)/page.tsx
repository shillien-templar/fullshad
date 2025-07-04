import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Layout, MessageSquare, FileText, CreditCard, Users, Target } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "FullShad - shadcn/ui Composite Components",
    description: "Open-source collection of composite UI layouts and real-world patterns built using shadcn/ui components. Copy-paste ready components for faster development.",
    keywords: ["shadcn", "ui components", "react", "nextjs", "tailwind", "composite components", "open source"],
    openGraph: {
        title: "FullShad - shadcn/ui Composite Components",
        description: "Open-source collection of composite UI layouts and real-world patterns built using shadcn/ui components.",
        type: "website",
    },
}

const categories = [
    {
        title: "Communication",
        description: "Email layouts, chat interfaces, and messaging components",
        icon: MessageSquare,
        href: "/communication",
        count: 1,
        items: ["Email Layouts", "Chat Interfaces", "Message Threads"]
    },
    {
        title: "Productivity",
        description: "Task management, kanban boards, and productivity dashboards",
        icon: Target,
        href: "/productivity",
        count: 3,
        items: ["Kanban Boards", "Task Lists", "Time Tracking"]
    },
    {
        title: "E-commerce",
        description: "Product cards, checkout flows, and shopping components",
        icon: CreditCard,
        href: "/ecommerce",
        count: 0,
        items: ["Product Cards", "Checkout Forms", "Shopping Carts"]
    },
    {
        title: "Social",
        description: "Social media posts, user profiles, and activity feeds",
        icon: Users,
        href: "/social",
        count: 0,
        items: ["Post Components", "User Profiles", "Activity Feeds"]
    },
    {
        title: "Content",
        description: "Articles, blogs, and content management interfaces",
        icon: FileText,
        href: "/content",
        count: 0,
        items: ["Article Layouts", "Blog Components", "Content Cards"]
    }
]

export default function Page() {
    return (
        <div className="flex flex-1 flex-col gap-8 p-6">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-12">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-sm">
                        Open Source • MIT License
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        FullShad
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A curated collection of composite UI layouts and real-world patterns built with{" "}
                        <span className="font-semibold text-foreground">shadcn/ui</span> components to help you build faster.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="/communication/email-layouts">
                            <Layout className="mr-2 h-4 w-4" />
                            Browse Components
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="https://github.com/shillien-templar/fullshad" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                            <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Categories Section */}
            <div className="space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">Component Categories</h2>
                    <p className="text-muted-foreground">
                        Organized collections of components for different use cases
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {categories.map((category) => {
                        const IconComponent = category.icon
                        return (
                            <Card key={category.title} className="group hover:shadow-lg transition-all duration-200">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <IconComponent className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <CardTitle className="flex items-center gap-2">
                                                    {category.title}
                                                    <Badge variant="secondary" className="text-xs">
                                                        {category.count} components
                                                    </Badge>
                                                </CardTitle>
                                                <CardDescription className="mt-1">
                                                    {category.description}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((item) => (
                                                <Badge key={item} variant="outline" className="text-xs">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Button
                                            className="w-full"
                                            variant={category.count > 0 ? "default" : "outline"}
                                            disabled={category.count === 0}
                                            asChild={category.count > 0}
                                        >
                                            {category.count > 0 ? (
                                                <Link href={category.href}>
                                                    Explore {category.title}
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
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6 py-12 border-t">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Ready to build faster?</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Start with our components or contribute your own patterns to help the community.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="/communication/email-layouts">
                            Get Started
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="https://github.com/shillien-templar/fullshad" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Star on GitHub
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
