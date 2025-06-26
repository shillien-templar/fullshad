import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Communication Components - FullShad",
    description: "Email layouts, chat interfaces, and messaging components built with shadcn/ui. Copy-paste ready communication UIs for your projects.",
    keywords: ["communication", "email layouts", "chat interfaces", "messaging", "shadcn", "react components"],
    openGraph: {
        title: "Communication Components - FullShad",
        description: "Email layouts, chat interfaces, and messaging components built with shadcn/ui.",
        type: "website",
        ...(process.env.NEXT_PUBLIC_URL && {
            url: `${process.env.NEXT_PUBLIC_URL}/communication`,
        }),
    },
}

const subTypes = [
    {
        title: "Email Layouts",
        description: "Complete email client interfaces with inbox, compose, and reading views",
        icon: Mail,
        href: "/communication/email-layouts",
        count: 1,
        badge: "Available"
    },
    {
        title: "Chat Interfaces",
        description: "Real-time messaging layouts with conversation threads and user controls",
        icon: MessageSquare,
        href: "/communication/chat-interfaces",
        count: 0,
        badge: "Coming Soon"
    },
    {
        title: "Message Threads",
        description: "Threaded discussion layouts for forums, comments, and group conversations",
        icon: Users,
        href: "/communication/message-threads",
        count: 0,
        badge: "Coming Soon"
    }
]

export default function CommunicationPage() {
    return (
        <div className="flex flex-1 flex-col gap-8 p-6">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                        <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Communication</h1>
                        <p className="text-muted-foreground">
                            Email layouts, chat interfaces, and messaging components
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
                        {subTypes.reduce((acc, subType) => acc + subType.count, 0)} total communication components
                    </p>
                    <p className="text-xs text-muted-foreground">
                        More components coming soon
                    </p>
                </div>
            </div>
        </div>
    )
}