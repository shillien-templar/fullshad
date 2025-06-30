import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {ScrollArea} from "@/components/ui/scroll-area"
import {
    Plus,
    MoreHorizontal,
    Calendar,
    MessageSquare,
    Paperclip
} from "lucide-react"

export function CompactKanbanBoard() {
    const columns = [
        {
            id: "todo",
            title: "To Do",
            count: 3,
            color: "bg-slate-50 dark:bg-slate-900",
            tasks: [
                {
                    id: 1,
                    title: "Update API docs",
                    priority: "high",
                    dueDate: "Dec 30",
                    assignees: [
                        { name: "Sarah", avatar: "https://avatar.vercel.sh/sarah", initials: "S" }
                    ],
                    comments: 2
                },
                {
                    id: 2,
                    title: "Fix mobile responsive issues",
                    priority: "medium",
                    dueDate: "Jan 2",
                    assignees: [
                        { name: "Alex", avatar: "https://avatar.vercel.sh/alex", initials: "A" }
                    ],
                    comments: 0
                },
                {
                    id: 3,
                    title: "Database backup",
                    priority: "low",
                    dueDate: "Jan 5",
                    assignees: [
                        { name: "Tom", avatar: "https://avatar.vercel.sh/tom", initials: "T" }
                    ],
                    comments: 1
                }
            ]
        },
        {
            id: "progress",
            title: "In Progress",
            count: 2,
            color: "bg-blue-50 dark:bg-blue-950",
            tasks: [
                {
                    id: 4,
                    title: "User authentication",
                    priority: "high",
                    dueDate: "Dec 29",
                    assignees: [
                        { name: "Mike", avatar: "https://avatar.vercel.sh/mike", initials: "M" }
                    ],
                    comments: 5
                },
                {
                    id: 5,
                    title: "Design system updates",
                    priority: "medium",
                    dueDate: "Jan 3",
                    assignees: [
                        { name: "Lisa", avatar: "https://avatar.vercel.sh/lisa", initials: "L" },
                        { name: "John", avatar: "https://avatar.vercel.sh/john", initials: "J" }
                    ],
                    comments: 3
                }
            ]
        },
        {
            id: "review",
            title: "Review",
            count: 2,
            color: "bg-amber-50 dark:bg-amber-950",
            tasks: [
                {
                    id: 6,
                    title: "Payment integration",
                    priority: "high",
                    dueDate: "Dec 31",
                    assignees: [
                        { name: "Emma", avatar: "https://avatar.vercel.sh/emma", initials: "E" }
                    ],
                    comments: 1
                },
                {
                    id: 7,
                    title: "Email templates",
                    priority: "low",
                    dueDate: "Jan 6",
                    assignees: [
                        { name: "Dan", avatar: "https://avatar.vercel.sh/dan", initials: "D" }
                    ],
                    comments: 0
                }
            ]
        },
        {
            id: "done",
            title: "Done",
            count: 3,
            color: "bg-emerald-50 dark:bg-emerald-950",
            tasks: [
                {
                    id: 8,
                    title: "CI/CD setup",
                    priority: "high",
                    dueDate: "Dec 20",
                    assignees: [
                        { name: "Ryan", avatar: "https://avatar.vercel.sh/ryan", initials: "R" }
                    ],
                    comments: 2
                },
                {
                    id: 9,
                    title: "Dark mode",
                    priority: "medium",
                    dueDate: "Dec 22",
                    assignees: [
                        { name: "Kate", avatar: "https://avatar.vercel.sh/kate", initials: "K" }
                    ],
                    comments: 1
                },
                {
                    id: 10,
                    title: "Bug fixes",
                    priority: "low",
                    dueDate: "Dec 25",
                    assignees: [
                        { name: "Sam", avatar: "https://avatar.vercel.sh/sam", initials: "S" }
                    ],
                    comments: 0
                }
            ]
        }
    ]

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high": return "bg-red-500"
            case "medium": return "bg-yellow-500"
            case "low": return "bg-green-500"
            default: return "bg-gray-500"
        }
    }

    return (
        <div className="w-full">
            <div className="flex gap-3 h-[600px] overflow-x-auto pb-4">
                {columns.map((column) => (
                    <div key={column.id} className="min-w-[280px] flex flex-col">
                        <Card className={`flex-1 ${column.color}`}>
                            <CardHeader className="pb-2 px-3 py-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <CardTitle className="text-sm font-medium">{column.title}</CardTitle>
                                        <Badge variant="secondary" className="text-xs h-5 px-1.5">
                                            {column.count}
                                        </Badge>
                                    </div>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                        <Plus className="h-3.5 w-3.5"/>
                                    </Button>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-0 px-3">
                                <ScrollArea className="h-[520px] pr-1">
                                    <div className="space-y-2">
                                        {column.tasks.map((task) => (
                                            <Card key={task.id} className="bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                                <CardContent className="p-3 space-y-2">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <h4 className="font-medium text-sm leading-tight line-clamp-2">{task.title}</h4>
                                                        <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 ${getPriorityColor(task.priority)}`}/>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                            <div className="flex items-center gap-1">
                                                                <Calendar className="h-3 w-3"/>
                                                                <span>{task.dueDate}</span>
                                                            </div>
                                                            {task.comments > 0 && (
                                                                <div className="flex items-center gap-1">
                                                                    <MessageSquare className="h-3 w-3"/>
                                                                    <span>{task.comments}</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="flex items-center -space-x-1">
                                                            {task.assignees.slice(0, 2).map((assignee, index) => (
                                                                <Avatar key={index} className="h-5 w-5 border border-white dark:border-gray-950">
                                                                    <AvatarImage src={assignee.avatar}/>
                                                                    <AvatarFallback className="text-xs">{assignee.initials}</AvatarFallback>
                                                                </Avatar>
                                                            ))}
                                                            {task.assignees.length > 2 && (
                                                                <div className="h-5 w-5 bg-muted rounded-full border border-white dark:border-gray-950 flex items-center justify-center">
                                                                    <span className="text-xs font-medium">+{task.assignees.length - 2}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}