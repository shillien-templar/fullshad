import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import {
    Reply,
    ReplyAll,
    Forward,
    Archive,
    Trash2,
    Star,
    Paperclip,
    MoreHorizontal
} from "lucide-react"

export function CompactEmail() {
    return (
        <Card className="max-w-2xl m-auto">
            <CardHeader className="px-4 py-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                        <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage src="https://avatar.vercel.sh/michaelchen"/>
                            <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-medium text-sm truncate">Michael Chen</h3>
                                <Badge variant="outline" className="text-xs px-1.5 py-0.5">Internal</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">m.chen@company.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                            <Star className="h-3.5 w-3.5"/>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                            <MoreHorizontal className="h-3.5 w-3.5"/>
                        </Button>
                    </div>
                </div>

                <div className="space-y-1 mt-2">
                    <h2 className="font-semibold text-base leading-tight">Weekly Team Sync Notes</h2>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>12:45 PM</span>
                        <Separator orientation="vertical" className="h-3"/>
                        <span className="flex items-center gap-1">
                            <Paperclip className="h-3 w-3"/>
                            2 files
                        </span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="px-4 py-3">
                <div className="flex flex-wrap items-center gap-2 mb-3 pb-3 border-b">
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                        <Reply className="h-3 w-3 mr-1.5"/>
                        Reply
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                        <ReplyAll className="h-3 w-3 mr-1.5"/>
                        All
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                        <Forward className="h-3 w-3 mr-1.5"/>
                        Forward
                    </Button>
                    <Separator orientation="vertical" className="h-4"/>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                        <Archive className="h-3 w-3 mr-1.5"/>
                        Archive
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs text-destructive hover:text-destructive">
                        <Trash2 className="h-3 w-3 mr-1.5"/>
                        Delete
                    </Button>
                </div>

                <div className="space-y-3 text-sm">
                    <p>Hi team,</p>

                    <p>
                        Quick recap from today&apos;s sync meeting. We covered project updates,
                        blockers, and next week&apos;s priorities.
                    </p>

                    <div className="bg-muted/30 p-3 rounded-md text-xs space-y-2">
                        <h4 className="font-medium">Action Items:</h4>
                        <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                            <li>Design review scheduled for Tuesday</li>
                            <li>API documentation needs updating</li>
                            <li>QA testing begins Friday</li>
                        </ul>
                    </div>

                    <p>Attached are the meeting notes and project timeline. Let me know if you have questions.</p>

                    <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2 p-2 bg-muted/50 rounded border">
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                                <Paperclip className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0"/>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-medium truncate">Meeting_Notes_Week_47.pdf</p>
                                    <p className="text-xs text-muted-foreground">854 KB</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="h-6 text-xs px-2">Download</Button>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 p-2 bg-muted/50 rounded border">
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                                <Paperclip className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0"/>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-medium truncate">Q4_Project_Timeline.xlsx</p>
                                    <p className="text-xs text-muted-foreground">1.2 MB</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="h-6 text-xs px-2">Download</Button>
                        </div>
                    </div>

                    <p className="text-xs text-muted-foreground pt-2">
                        Best,<br/>
                        Michael
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
