'use client';

import { useState } from "react"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ScrollArea} from "@/components/ui/scroll-area"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import {
    Plus,
    MoreHorizontal,
    Calendar as CalendarIcon,
    MessageSquare,
    Paperclip,
    Settings,
    Filter,
    Download,
    Share,
    Trash2,
    Check,
    ChevronsUpDown,
    CircleDot,
    Clock,
    Eye,
    CheckCircle,
    Edit,
    Copy,
    Archive,
    User,
} from "lucide-react"

export function TabbedKanbanBoard() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedAssignee, setSelectedAssignee] = useState("")
    const [isAssigneeOpen, setIsAssigneeOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [isDateOpen, setIsDateOpen] = useState(false)

    const availableAssignees = [
        { name: "Sarah Kim", avatar: "https://avatar.vercel.sh/sarahkim", initials: "SK" },
        { name: "Alex Rivera", avatar: "https://avatar.vercel.sh/alexrivera", initials: "AR" },
        { name: "Mike Johnson", avatar: "https://avatar.vercel.sh/mikejohnson", initials: "MJ" },
        { name: "Lisa Chen", avatar: "https://avatar.vercel.sh/lisachen", initials: "LC" },
        { name: "Emma Davis", avatar: "https://avatar.vercel.sh/emmadavis", initials: "ED" },
        { name: "Tom Wilson", avatar: "https://avatar.vercel.sh/tomwilson", initials: "TW" },
    ]

    const getColumnIcon = (columnId: string) => {
        switch (columnId) {
            case "todo": return CircleDot
            case "progress": return Clock
            case "review": return Eye
            case "done": return CheckCircle
            default: return CircleDot
        }
    }

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
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                        <DialogDescription>
                            Create a new task for your project. Fill in the details below.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Task Title</Label>
                            <Input id="title" placeholder="Enter task title..." />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="Enter task description..." />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="priority">Priority</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label>Due Date</Label>
                            <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="justify-start text-left font-normal"
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(date) => {
                                            setSelectedDate(date)
                                            setIsDateOpen(false)
                                        }}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid gap-2">
                            <Label>Assignee</Label>
                            <Popover open={isAssigneeOpen} onOpenChange={setIsAssigneeOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={isAssigneeOpen}
                                        className="justify-between"
                                    >
                                        {selectedAssignee
                                            ? availableAssignees.find((assignee) => assignee.name === selectedAssignee)?.name
                                            : "Select assignee..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search assignee..." />
                                        <CommandList>
                                            <CommandEmpty>No assignee found.</CommandEmpty>
                                            <CommandGroup>
                                                {availableAssignees.map((assignee) => (
                                                    <CommandItem
                                                        key={assignee.name}
                                                        value={assignee.name}
                                                        onSelect={(currentValue) => {
                                                            setSelectedAssignee(currentValue === selectedAssignee ? "" : currentValue)
                                                            setIsAssigneeOpen(false)
                                                        }}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Avatar className="h-6 w-6">
                                                                <AvatarImage src={assignee.avatar} />
                                                                <AvatarFallback className="text-xs">{assignee.initials}</AvatarFallback>
                                                            </Avatar>
                                                            {assignee.name}
                                                        </div>
                                                        <Check
                                                            className={`ml-auto h-4 w-4 ${
                                                                selectedAssignee === assignee.name ? "opacity-100" : "opacity-0"
                                                            }`}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setIsDialogOpen(false)}>
                            Create Task
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Tabs defaultValue="todo" className="w-full">
                <div className="flex items-center justify-between mb-6">
                    <TabsList className="grid w-full max-w-2xl grid-cols-4">
                        {columns.map((column) => {
                            const IconComponent = getColumnIcon(column.id)
                            return (
                                <TabsTrigger key={column.id} value={column.id} className="flex items-center gap-2">
                                    <IconComponent className="h-4 w-4" />
                                    <span className="hidden sm:inline">{column.title}</span>
                                    <Badge variant="secondary" className="text-xs">
                                        {column.count}
                                    </Badge>
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setIsDialogOpen(true)}>
                            <Plus className="h-4 w-4 mr-2"/>
                            Add Task
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    Board Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filter Tasks
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Download className="mr-2 h-4 w-4" />
                                    Export Board
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Share className="mr-2 h-4 w-4" />
                                    Share Board
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete Board
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {columns.map((column) => (
                    <TabsContent key={column.id} value={column.id}>
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        {column.title}
                                        <Badge variant="outline">
                                            {column.count} task{column.count !== 1 ? 's' : ''}
                                        </Badge>
                                    </CardTitle>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-4">
                                    {column.tasks.map((task) => (
                                        <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer">
                                            <CardContent className="px-4 space-y-3">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="space-y-1 flex-1">
                                                        <h4 className="font-semibold text-base leading-tight">{task.title}</h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {task.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Select defaultValue={column.id}>
                                                            <SelectTrigger className="w-auto h-7 text-xs">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {columns.map((col) => {
                                                                    const IconComponent = getColumnIcon(col.id)
                                                                    return (
                                                                        <SelectItem key={col.id} value={col.id}>
                                                                            <div className="flex items-center gap-2">
                                                                                <IconComponent className="h-3 w-3" />
                                                                                {col.title}
                                                                            </div>
                                                                        </SelectItem>
                                                                    )
                                                                })}
                                                            </SelectContent>
                                                        </Select>
                                                        <Badge variant="outline" className={`text-xs px-2 py-1 ${getPriorityColor(task.priority)}`}>
                                                            {task.priority}
                                                        </Badge>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                                                    <MoreHorizontal className="h-3 w-3" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem>
                                                                    <Edit className="mr-2 h-4 w-4" />
                                                                    Edit Task
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <Copy className="mr-2 h-4 w-4" />
                                                                    Duplicate
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <User className="mr-2 h-4 w-4" />
                                                                    Assign
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <Archive className="mr-2 h-4 w-4" />
                                                                    Archive
                                                                </DropdownMenuItem>
                                                                <DropdownMenuSeparator />
                                                                <DropdownMenuItem className="text-destructive">
                                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                                    Delete
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
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
                                                            <CalendarIcon className="h-4 w-4"/>
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
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
