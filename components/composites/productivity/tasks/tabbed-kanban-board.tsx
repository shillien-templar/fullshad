'use client';

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ScrollArea} from "@/components/ui/scroll-area"
import {
    Plus,
    MoreHorizontal,
    Calendar,
    MessageSquare,
    Paperclip,
    Flag
} from "lucide-react"

export function TabbedKanbanBoard() {
    const columns = [
        {
            id: "todo",
            title: "To Do",
            count: 4,
            tasks: [
                {
                    id: 1,
                    title: "Redesign homepage hero section",
                    description: "Update the main landing page with new branding and improved CTA",
                    priority: "high",
                    dueDate: "Dec 30",
                    assignees: [
                        { name: "Sarah Kim", avatar: "https://avatar.vercel.sh/sarahkim", initials: "SK" }
                    ],
                    comments: 4,
                    attachments: 2,
                    labels: ["Design", "Frontend"]
                },
                {
                    id: 2,
                    title: "API rate limiting implementation",
                    description: "Add rate limiting to prevent API abuse and improve performance",
                    priority: "medium",
                    dueDate: "Jan 2",
                    assignees: [
                        { name: "Alex Rivera", avatar: "https://avatar.vercel.sh/alexrivera", initials: "AR" }
                    ],
                    comments: 2,
                    attachments: 1,
                    labels: ["Backend", "Security"]
                },
                {
                    id: 3,
                    title: "Mobile app testing suite",
                    description: "Set up automated testing for React Native app",
                    priority: "low",
                    dueDate: "Jan 5",
                    assignees: [
                        { name: "Mike Johnson", avatar: "https://avatar.vercel.sh/mikejohnson", initials: "MJ" }
                    ],
                    comments: 1,
                    attachments: 0,
                    labels: ["Testing", "Mobile"]
                },
                {
                    id: 4,
                    title: "User onboarding flow",
                    description: "Design and implement new user onboarding experience",
                    priority: "high",
                    dueDate: "Dec 28",
                    assignees: [
                        { name: "Lisa Chen", avatar: "https://avatar.vercel.sh/lisachen", initials: "LC" },
                        { name: "Emma Davis", avatar: "https://avatar.vercel.sh/emmadavis", initials: "ED" }
                    ],
                    comments: 6,
                    attachments: 3,
                    labels: ["UX", "Frontend"]
                }
            ]
        },
        {
            id: "progress",
            title: "In Progress",
            count: 3,
            tasks: [
                {
                    id: 5,
                    title: "OAuth integration with Google",
                    description: "Implement Google OAuth for seamless user authentication",
                    priority: "high",
                    dueDate: "Dec 29",
                    assignees: [
                        { name: "Tom Wilson", avatar: "https://avatar.vercel.sh/tomwilson", initials: "TW" }
                    ],
                    comments: 8,
                    attachments: 4,
                    labels: ["Authentication", "Backend"]
                },
                {
                    id: 6,
                    title: "Component library documentation",
                    description: "Write comprehensive docs for our design system",
                    priority: "medium",
                    dueDate: "Jan 3",
                    assignees: [
                        { name: "Sarah Kim", avatar: "https://avatar.vercel.sh/sarahkim", initials: "SK" }
                    ],
                    comments: 3,
                    attachments: 5,
                    labels: ["Documentation", "Design"]
                },
                {
                    id: 7,
                    title: "Database optimization",
                    description: "Optimize slow queries and improve indexing",
                    priority: "medium",
                    dueDate: "Jan 4",
                    assignees: [
                        { name: "Alex Rivera", avatar: "https://avatar.vercel.sh/alexrivera", initials: "AR" }
                    ],
                    comments: 2,
                    attachments: 1,
                    labels: ["Performance", "Database"]
                }
            ]
        },
        {
            id: "review",
            title: "Review",
            count: 2,
            tasks: [
                {
                    id: 8,
                    title: "Stripe payment integration",
                    description: "Complete integration with Stripe for subscription billing",
                    priority: "high",
                    dueDate: "Dec 31",
                    assignees: [
                        { name: "Mike Johnson", avatar: "https://avatar.vercel.sh/mikejohnson", initials: "MJ" }
                    ],
                    comments: 5,
                    attachments: 2,
                    labels: ["Payment", "Backend"]
                },
                {
                    id: 9,
                    title: "Email notification templates",
                    description: "Create responsive HTML email templates",
                    priority: "low",
                    dueDate: "Jan 6",
                    assignees: [
                        { name: "Emma Davis", avatar: "https://avatar.vercel.sh/emmadavis", initials: "ED" }
                    ],
                    comments: 1,
                    attachments: 4,
                    labels: ["Email", "Design"]
                }
            ]
        },
        {
            id: "done",
            title: "Done",
            count: 3,
            tasks: [
                {
                    id: 10,
                    title: "CI/CD pipeline setup",
                    description: "Configure GitHub Actions for automated deployment",
                    priority: "high",
                    dueDate: "Dec 20",
                    assignees: [
                        { name: "Tom Wilson", avatar: "https://avatar.vercel.sh/tomwilson", initials: "TW" }
                    ],
                    comments: 4,
                    attachments: 2,
                    labels: ["DevOps", "Infrastructure"]
                },
                {
                    id: 11,
                    title: "Dark theme implementation",
                    description: "Add dark mode support with theme persistence",
                    priority: "medium",
                    dueDate: "Dec 22",
                    assignees: [
                        { name: "Lisa Chen", avatar: "https://avatar.vercel.sh/lisachen", initials: "LC" }
                    ],
                    comments: 3,
                    attachments: 1,
                    labels: ["Frontend", "UI"]
                },
                {
                    id: 12,
                    title: "Security audit",
                    description: "Complete security review and vulnerability assessment",
                    priority: "high",
                    dueDate: "Dec 25",
                    assignees: [
                        { name: "Alex Rivera", avatar: "https://avatar.vercel.sh/alexrivera", initials: "AR" }
                    ],
                    comments: 2,
                    attachments: 3,
                    labels: ["Security", "Audit"]
                }
            ]
        }
    ]

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high": return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
            case "medium": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
            case "low": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
            default: return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
        }
    }

    return (
        <div className="w-full">
            <Tabs defaultValue="todo" className="w-full">
                <div className="flex items-center justify-between mb-6">
                    <TabsList className="grid w-full max-w-2xl grid-cols-4">
                        {columns.map((column) => (
                            <TabsTrigger key={column.id} value={column.id} className="flex items-center gap-2">
                                {column.title}
                                <Badge variant="secondary" className="text-xs">
                                    {column.count}
                                </Badge>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-2"/>
                            Add Task
                        </Button>
                        <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>

                {columns.map((column) => (
                    <TabsContent key={column.id} value={column.id} className="mt-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        {column.title}
                                        <Badge variant="outline">
                                            {column.count} task{column.count !== 1 ? 's' : ''}
                                        </Badge>
                                    </CardTitle>
                                    <Button variant="outline" size="sm">
                                        <Plus className="h-4 w-4 mr-2"/>
                                        New Task
                                    </Button>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <ScrollArea className="h-[500px]">
                                    <div className="space-y-4">
                                        {column.tasks.map((task) => (
                                            <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer">
                                                <CardContent className="p-4 space-y-3">
                                                    <div className="flex items-start justify-between gap-3">
                                                        <div className="space-y-1 flex-1">
                                                            <h4 className="font-semibold text-base leading-tight">{task.title}</h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                {task.description}
                                                            </p>
                                                        </div>
                                                        <Badge variant="outline" className={`text-xs px-2 py-1 ${getPriorityColor(task.priority)}`}>
                                                            {task.priority}
                                                        </Badge>
                                                    </div>

                                                    <div className="flex flex-wrap gap-1">
                                                        {task.labels.map((label, index) => (
                                                            <Badge key={index} variant="secondary" className="text-xs">
                                                                {label}
                                                            </Badge>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center justify-between pt-2">
                                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                            <div className="flex items-center gap-1">
                                                                <Calendar className="h-4 w-4"/>
                                                                <span>{task.dueDate}</span>
                                                            </div>
                                                            {task.comments > 0 && (
                                                                <div className="flex items-center gap-1">
                                                                    <MessageSquare className="h-4 w-4"/>
                                                                    <span>{task.comments}</span>
                                                                </div>
                                                            )}
                                                            {task.attachments > 0 && (
                                                                <div className="flex items-center gap-1">
                                                                    <Paperclip className="h-4 w-4"/>
                                                                    <span>{task.attachments}</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="flex items-center -space-x-2">
                                                            {task.assignees.map((assignee, index) => (
                                                                <Avatar key={index} className="h-8 w-8 border-2 border-white dark:border-gray-950">
                                                                    <AvatarImage src={assignee.avatar}/>
                                                                    <AvatarFallback className="text-xs">{assignee.initials}</AvatarFallback>
                                                                </Avatar>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}