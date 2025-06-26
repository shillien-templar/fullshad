import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, Package, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "E-commerce Components - FullShad",
    description: "Product cards, checkout flows, and shopping components built with shadcn/ui. Copy-paste ready e-commerce UIs for your projects.",
    keywords: ["ecommerce", "product cards", "checkout", "shopping cart", "shadcn", "react components"],
    openGraph: {
        title: "E-commerce Components - FullShad",
        description: "Product cards, checkout flows, and shopping components built with shadcn/ui.",
        type: "website",
        ...(process.env.NEXT_PUBLIC_URL && {
            url: `${process.env.NEXT_PUBLIC_URL}/ecommerce`,
        }),
    },
}

const subTypes = [
    {
        title: "Product Cards",
        description: "Beautiful product displays with images, pricing, and interactive elements",
        icon: Package,
        href: "/ecommerce/product-cards",
        count: 0,
        badge: "Coming Soon"
    },
    {
        title: "Checkout Forms",
        description: "Complete checkout flows with payment forms and order summaries",
        icon: CreditCard,
        href: "/ecommerce/checkout-forms",
        count: 0,
        badge: "Coming Soon"
    },
    {
        title: "Shopping Carts",
        description: "Interactive shopping cart interfaces with quantity controls and totals",
        icon: ShoppingCart,
        href: "/ecommerce/shopping-carts",
        count: 0,
        badge: "Coming Soon"
    }
]

export default function EcommercePage() {
    return (
        <div className="flex flex-1 flex-col gap-8 p-6">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                        <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">E-commerce</h1>
                        <p className="text-muted-foreground">
                            Product cards, checkout flows, and shopping components
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
                        {subTypes.reduce((acc, subType) => acc + subType.count, 0)} total e-commerce components
                    </p>
                    <p className="text-xs text-muted-foreground">
                        More components coming soon
                    </p>
                </div>
            </div>
        </div>
    )
}