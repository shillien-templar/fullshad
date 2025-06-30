import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import Link from "next/link"
import {Target, Calendar, CheckSquare, Clock, TrendingUp} from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Productivity Components - FullShad",
    description: "Productivity and project management components built with shadcn/ui. Kanban boards, task lists, calendars, and time tracking interfaces.",
    keywords: ["productivity", "project management", "kanban", "task management", "calendar", "shadcn", "react components"],
    openGraph: {
        title: "Productivity Components - FullShad",
        description: "Productivity and project management components built with shadcn/ui for enhanced workflow management.",
        type: "website",
    },
}

export default function ProductivityPage() {
    const categories = [
        {
            title: "Tasks",
            description: "Kanban boards and task management interfaces with multiple layout options",
            icon: CheckSquare,
            href: "/productivity/tasks",
            count: 3,
            available: true,
            features: ["Multiple Layouts", "Priority Labels", "Assignee Avatars", "Due Dates"]
        },
        {
            title: "Task Lists",
            description: "Organized task management with checkboxes and filters",
            icon: Target,
            href: "#",
            count: 0,
            available: false,
            features: ["Filtering", "Sorting", "Bulk Actions", "Categories"]
        },
        {
            title: "Calendar Views",
            description: "Monthly, weekly, and daily calendar interfaces",
            icon: Calendar,
            href: "#",
            count: 0,
            available: false,
            features: ["Multiple Views", "Event Creation", "Recurring Events", "Time Slots"]
        },
        {
            title: "Time Tracking",
            description: "Time logging and productivity analytics dashboards",
            icon: Clock,
            href: "#",
            count: 0,
            available: false,
            features: ["Timer Interface", "Time Logs", "Analytics", "Reports"]
        }
    ]

    const totalComponents = categories.reduce((sum, category) => sum + category.count, 0)

    return (
        <div className="flex flex-1 flex-col gap-8 p-6">
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Target className="h-8 w-8 text-primary"/>
                        <h1 className="text-3xl font-bold tracking-tight">Productivity</h1>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        Boost your workflow with our collection of productivity and project management components.
                        From Kanban boards to time tracking interfaces, everything you need to build efficient productivity applications.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <Card key={category.title} className="relative group hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <Icon className="h-5 w-5 text-primary"/>
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg">{category.title}</CardTitle>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Badge variant={category.available ? "default" : "secondary"}>
                                                        {category.count} component{category.count !== 1 ? 's' : ''}
                                                    </Badge>
                                                    {!category.available && (
                                                        <Badge variant="outline" className="text-xs">
                                                            Coming Soon
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CardDescription className="text-sm">
                                        {category.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {category.features.map((feature) => (
                                                <Badge key={feature} variant="outline" className="text-xs">
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        {category.available ? (
                                            <Button asChild className="w-full">
                                                <Link href={category.href}>
                                                    View Components
                                                </Link>
                                            </Button>
                                        ) : (
                                            <Button disabled className="w-full">
                                                Coming Soon
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Productivity Collection Stats</h3>
                                <p className="text-muted-foreground">
                                    Building the most comprehensive productivity component library
                                </p>
                            </div>
                            <div className="text-right space-y-1">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4 text-green-600"/>
                                    <span className="text-2xl font-bold">{totalComponents}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Components Available</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
