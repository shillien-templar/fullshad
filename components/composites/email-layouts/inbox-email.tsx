import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import {ScrollArea} from "@/components/ui/scroll-area"
import {
    Archive,
    Reply,
    ReplyAll,
    Forward,
    Trash2,
    Star,
    MoreHorizontal,
    Paperclip,
    Flag,
    MessageSquare,
    UserPlus,
    Calendar,
    Tag
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export function InboxEmail() {
    return (
        <Card>
            <CardHeader className="px-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://avatar.vercel.sh/sarahjohnson"/>
                            <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>

                        <div>
                            <h3 className="font-semibold">Sarah Johnson</h3>
                            <p className="text-sm text-muted-foreground">sarah@company.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                            <Star className="h-4 w-4"/>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem>
                                    <Flag className="h-4 w-4 mr-2"/>
                                    Mark as Important
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MessageSquare className="h-4 w-4 mr-2"/>
                                    Add to Task
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Calendar className="h-4 w-4 mr-2"/>
                                    Schedule Send
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>
                                    <Tag className="h-4 w-4 mr-2"/>
                                    Add Label
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <UserPlus className="h-4 w-4 mr-2"/>
                                    Add to Contacts
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>
                                    <Archive className="h-4 w-4 mr-2"/>
                                    Archive
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive focus:text-destructive">
                                    <Trash2 className="h-4 w-4 mr-2"/>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Q4 Marketing Campaign Review</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>To: marketing-team@company.com</span>
                        <span>Today at 2:34 PM</span>
                        <Badge variant="secondary">Priority</Badge>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="px-4">
                {/* Email Actions */}
                <div className="border-b pb-3 mb-4">
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Reply className="h-4 w-4 mr-2"/>
                            Reply
                        </Button>
                        <Button variant="outline" size="sm">
                            <ReplyAll className="h-4 w-4 mr-2"/>
                            Reply All
                        </Button>
                        <Button variant="outline" size="sm">
                            <Forward className="h-4 w-4 mr-2"/>
                            Forward
                        </Button>
                        <Separator orientation="vertical" className="h-6"/>
                        <Button variant="outline" size="sm">
                            <Archive className="h-4 w-4 mr-2"/>
                            Archive
                        </Button>
                        <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-2"/>
                            Delete
                        </Button>
                    </div>
                </div>

                {/* Email Body */}
                <ScrollArea className="flex-1">
                    <div className="space-y-4">
                        <p>Hi Team,</p>

                        <p>
                            I've had a chance to review the Q4 marketing campaign materials and overall I'm
                            impressed
                            with the creative direction and strategic approach. The messaging is clear and aligns
                            well
                            with our brand values.
                        </p>

                        <p>Here are a few key observations and suggestions:</p>

                        <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                            <h4 className="font-medium">Key Points:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>The visual identity is strong and consistent across all materials</li>
                                <li>Consider adjusting the CTA placement on the landing page for better conversion
                                </li>
                                <li>The email campaign sequence looks good - timing seems optimal</li>
                                <li>Budget allocation appears reasonable given our Q4 targets</li>
                            </ul>
                        </div>

                        <p>
                            I've attached the detailed feedback document with specific comments on each piece.
                            Please let me know if you have any questions or would like to schedule a call to
                            discuss further.
                        </p>

                        <p>
                            Looking forward to seeing this campaign in action!
                        </p>

                        <p>
                            Best regards,<br/>
                            Sarah
                        </p>

                        {/* Attachments */}
                        <Card className="bg-muted">
                            <CardHeader>
                                <CardTitle>
                                    Attachments (2)
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-2">
                                    <div className="rounded-md flex items-center gap-3 p-2 bg-primary-foreground rounded border">
                                        <Paperclip className="h-4 w-4 text-muted-foreground"/>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">Q4_Campaign_Review.pdf</p>
                                            <p className="text-xs text-muted-foreground">2.4 MB</p>
                                        </div>
                                        <Button variant="outline" size="sm">Download</Button>
                                    </div>
                                    <div className="rounded-md flex items-center gap-3 p-2 bg-primary-foreground rounded border">
                                        <Paperclip className="h-4 w-4 text-muted-foreground"/>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">Campaign_Budget_Analysis.xlsx</p>
                                            <p className="text-xs text-muted-foreground">1.8 MB</p>
                                        </div>
                                        <Button variant="outline" size="sm">Download</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
