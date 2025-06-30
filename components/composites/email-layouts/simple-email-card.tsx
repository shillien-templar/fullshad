import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {
    Reply,
    Archive,
    Trash2,
    Clock,
    Paperclip
} from "lucide-react"

export function SimpleEmailCard() {
    return (
        <Card className="max-w-lg m-auto">
            <CardContent className="p-4">
                <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10 flex-shrink-0">
                            <AvatarImage src="https://avatar.vercel.sh/emilydavis"/>
                            <AvatarFallback>ED</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="font-semibold truncate">Emily Davis</h3>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                                    <Clock className="h-3 w-3"/>
                                    <span>2h ago</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">emily.davis@design.co</p>
                        </div>
                    </div>

                    {/* Subject and badges */}
                    <div className="space-y-2">
                        <h2 className="font-medium leading-tight">Design System Updates Ready for Review</h2>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">Design</Badge>
                            <Badge variant="secondary" className="text-xs">Important</Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Paperclip className="h-3 w-3"/>
                                <span>3</span>
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Hi team! I&apos;ve finished updating our design system components with the new brand guidelines.
                        The components now include improved accessibility features and better responsive behavior...
                    </p>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                            <Button size="sm" className="h-8">
                                <Reply className="h-4 w-4 mr-2"/>
                                Reply
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                                <Archive className="h-4 w-4"/>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                                <Trash2 className="h-4 w-4"/>
                            </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                            View Full Email
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
