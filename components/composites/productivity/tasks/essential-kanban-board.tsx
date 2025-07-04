'use client';

import { useState } from "react"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
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

export function EssentialKanbanBoard() {
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
            case "in-progress": return Clock
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
            color: "bg-gray-100 dark:bg-gray-800",
            tasks: [
                {
                    id: 1,
                    title: "Design new landing page",
                    description: "Create wireframes and mockups for the new product landing page",
                    priority: "high",
                    dueDate: "Dec 30",
                    assignees: [
                        { name: "Sarah Kim", avatar: "https://avatar.vercel.sh/sarahkim", initials: "SK" }
                    ],
                    comments: 3,
                    attachments: 2,
                    labels: ["Design", "Frontend"]
                },
                {
                    id: 2,
                    title: "API Documentation Update",
                    description: "Update API docs with new authentication endpoints",
                    priority: "medium",
                    dueDate: "Jan 2",
                    assignees: [
                        { name: "Alex Rivera", avatar: "https://avatar.vercel.sh/alexrivera", initials: "AR" }
                    ],
                    comments: 1,
                    attachments: 0,
                    labels: ["Documentation", "Backend"]
                },
                {
                    id: 3,
                    title: "Mobile App Testing",
                    description: "Complete testing for iOS and Android releases",
                    priority: "low",
                    dueDate: "Jan 5",
                    assignees: [
                        { name: "Mike Johnson", avatar: "https://avatar.vercel.sh/mikejohnson", initials: "MJ" },
                        { name: "Lisa Chen", avatar: "https://avatar.vercel.sh/lisachen", initials: "LC" }
                    ],
                    comments: 5,
                    attachments: 1,
                    labels: ["Testing", "Mobile"]
                },
                {
                    id: 4,
                    title: "Database Migration",
                    description: "Migrate user data to new database schema",
                    priority: "high",
                    dueDate: "Dec 28",
                    assignees: [
                        { name: "Tom Wilson", avatar: "https://avatar.vercel.sh/tomwilson", initials: "TW" }
                    ],
                    comments: 2,
                    attachments: 0,
                    labels: ["Backend", "Database"]
                }
            ]
        },
        {
            id: "in-progress",
            title: "In Progress",
            count: 3,
            color: "bg-blue-50 dark:bg-blue-950",
            tasks: [
                {
                    id: 5,
                    title: "User Authentication Refactor",
                    description: "Implement OAuth 2.0 and improve security",
                    priority: "high",
                    dueDate: "Dec 29",
                    assignees: [
                        { name: "Alex Rivera", avatar: "https://avatar.vercel.sh/alexrivera", initials: "AR" }
                    ],
                    comments: 8,
                    attachments: 3,
                    labels: ["Security", "Backend"]
                },
                {
                    id: 6,
                    title: "Component Library Updates",
                    description: "Update design system components with new brand guidelines",
                    priority: "medium",
                    dueDate: "Jan 3",
                    assignees: [
                        { name: "Sarah Kim", avatar: "https://avatar.vercel.sh/sarahkim", initials: "SK" }
                    ],
                    comments: 4,
                    attachments: 5,
                    labels: ["Design", "Frontend"]
                },
                {
                    id: 7,
                    title: "Performance Optimization",
                    description: "Optimize API response times and database queries",
                    priority: "medium",
                    dueDate: "Jan 4",
                    assignees: [
                        { name: "Tom Wilson", avatar: "https://avatar.vercel.sh/tomwilson", initials: "TW" }
                    ],
                    comments: 2,
                    attachments: 1,
                    labels: ["Performance", "Backend"]
                }
            ]
        },
        {
            id: "review",
            title: "Review",
            count: 2,
            color: "bg-yellow-50 dark:bg-yellow-950",
            tasks: [
                {
                    id: 8,
                    title: "Payment Integration",
                    description: "Integrate Stripe payment processing",
                    priority: "high",
                    dueDate: "Dec 31",
                    assignees: [
                        { name: "Mike Johnson", avatar: "https://avatar.vercel.sh/mikejohnson", initials: "MJ" }
                    ],
                    comments: 6,
                    attachments: 2,
                    labels: ["Payment", "Backend"]
                },
                {
                    id: 9,
                    title: "Email Template Design",
                    description: "Create responsive email templates for notifications",
                    priority: "low",
                    dueDate: "Jan 6",
                    assignees: [
                        { name: "Lisa Chen", avatar: "https://avatar.vercel.sh/lisachen", initials: "LC" }
                    ],
                    comments: 1,
                    attachments: 4,
                    labels: ["Design", "Email"]
                }
            ]
        },
        {
            id: "done",
            title: "Done",
            count: 5,
            color: "bg-green-50 dark:bg-green-950",
            tasks: [
                {
                    id: 10,
                    title: "Setup CI/CD Pipeline",
                    description: "Configure automated testing and deployment",
                    priority: "high",
                    dueDate: "Dec 20",
                    assignees: [
                        { name: "Tom Wilson", avatar: "https://avatar.vercel.sh/tomwilson", initials: "TW" }
                    ],
                    comments: 3,
                    attachments: 1,
                    labels: ["DevOps", "Infrastructure"]
                },
                {
                    id: 11,
                    title: "Dark Mode Implementation",
                    description: "Add dark theme support across the application",
                    priority: "medium",
                    dueDate: "Dec 22",
                    assignees: [
                        { name: "Sarah Kim", avatar: "https://avatar.vercel.sh/sarahkim", initials: "SK" }
                    ],
                    comments: 2,
                    attachments: 0,
                    labels: ["Frontend", "UI"]
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
            <ScrollArea>
                <div className="flex gap-4 overflow-x-auto pb-4">
                {columns.map((column) => (
                    <div key={column.id} className="min-w-[320px] md:min-w-[350px] flex flex-col">
                        <Card className={`gap-4 py-4 flex-1 ${column.color}`}>
                            <CardHeader className="px-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <CardTitle className="text-sm font-medium">{column.title}</CardTitle>
                                        <Badge variant="secondary" className="text-xs">
                                            {column.count}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsDialogOpen(true)}>
                                            <Plus className="h-4 w-4"/>
                                        </Button>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                                    <MoreHorizontal className="h-4 w-4"/>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Settings className="mr-2 h-4 w-4" />
                                                    Column Settings
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Filter className="mr-2 h-4 w-4" />
                                                    Filter Tasks
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Download className="mr-2 h-4 w-4" />
                                                    Export Column
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Share className="mr-2 h-4 w-4" />
                                                    Share Column
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Clear Column
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="px-2">
                                <ScrollArea className="h-[700px]">
                                    <div className="space-y-3">
                                        {column.tasks.map((task) => (
                                            <Card key={task.id} className="py-2 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                                <CardContent className="px-3 space-y-3">
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <Select defaultValue={column.id}>
                                                                <SelectTrigger className="w-auto h-6 text-xs border-none shadow-none p-1">
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
                                                            <Badge variant="outline" className={`text-xs px-1.5 py-0.5 ${getPriorityColor(task.priority)}`}>
                                                                {task.priority}
                                                            </Badge>
                                                        </div>
                                                        <div className="flex items-start justify-between gap-2">
                                                            <h4 className="font-medium text-sm leading-tight flex-1">{task.title}</h4>
                                                            <div className="flex items-center gap-1 shrink-0">
                                                                <DropdownMenu>
                                                                    <DropdownMenuTrigger asChild>
                                                                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
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
                                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                                            {task.description}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-1">
                                                        {task.labels.map((label, index) => (
                                                            <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                                                                {label}
                                                            </Badge>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                                            <div className="flex items-center gap-1">
                                                                <CalendarIcon className="h-3 w-3"/>
                                                                <span>{task.dueDate}</span>
                                                            </div>
                                                            {task.comments > 0 && (
                                                                <div className="flex items-center gap-1">
                                                                    <MessageSquare className="h-3 w-3"/>
                                                                    <span>{task.comments}</span>
                                                                </div>
                                                            )}
                                                            {task.attachments > 0 && (
                                                                <div className="flex items-center gap-1">
                                                                    <Paperclip className="h-3 w-3"/>
                                                                    <span>{task.attachments}</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="flex items-center -space-x-1">
                                                            {task.assignees.map((assignee, index) => (
                                                                <Avatar key={index} className="h-6 w-6 border-2 border-white dark:border-gray-950">
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
                    </div>
                ))}
                </div>

                <ScrollBar orientation="horizontal"  />
            </ScrollArea>
        </div>
    )
}
