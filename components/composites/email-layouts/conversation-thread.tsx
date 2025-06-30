'use client';

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import {
    Reply,
    ReplyAll,
    Forward,
    ChevronDown,
    ChevronUp,
    MoreHorizontal,
    Paperclip
} from "lucide-react"
import {useState} from "react"

export function ConversationThread() {
    const [expandedEmails, setExpandedEmails] = useState<Set<number>>(new Set([2]))

    const toggleExpanded = (index: number) => {
        const newExpanded = new Set(expandedEmails)
        if (newExpanded.has(index)) {
            newExpanded.delete(index)
        } else {
            newExpanded.add(index)
        }
        setExpandedEmails(newExpanded)
    }

    const emails = [
        {
            id: 1,
            sender: "Alex Rivera",
            email: "alex@company.com",
            avatar: "https://avatar.vercel.sh/alexrivera",
            initials: "AR",
            time: "Mon 10:30 AM",
            preview: "Initial proposal for the new feature implementation...",
            content: `Hi team,
                
                I wanted to share the initial proposal for the new user authentication feature. After reviewing the requirements, I think we should go with a multi-factor approach.
                
                The key benefits include:
                • Enhanced security posture
                • Better user experience
                • Compliance with industry standards
                
                Let me know your thoughts on this approach.
                
                Best regards,
                Alex`,
            attachments: []
        },
        {
            id: 2,
            sender: "Sarah Kim",
            email: "s.kim@company.com",
            avatar: "https://avatar.vercel.sh/sarahkim",
            initials: "SK",
            time: "Mon 2:15 PM",
            preview: "Great proposal! I have a few suggestions regarding the implementation timeline...",
            content: `Alex,
                
                Great proposal! I have a few suggestions regarding the implementation timeline and technical approach.
                
                I think we should also consider:
                1. Backward compatibility with existing auth
                2. Gradual rollout strategy
                3. Performance impact analysis
                
                I've attached a technical review document with more detailed feedback.
                
                Thanks,
                Sarah`,
            attachments: [
                {name: "Technical_Review_Auth_Feature.pdf", size: "2.1 MB"}
            ]
        },
        {
            id: 3,
            sender: "Mike Johnson",
            email: "mike.j@company.com",
            avatar: "https://avatar.vercel.sh/mikejohnson",
            initials: "MJ",
            time: "Today 9:45 AM",
            preview: "Agreed with both points. From a design perspective, we'll need to update...",
            content: `Team,
                
                Agreed with both points. From a design perspective, we'll need to update the user onboarding flow to accommodate the new authentication steps.
                
                I can work on the wireframes this week and have something ready for review by Friday.
                
                Mike`,
            attachments: []
        }
    ]

    return (
        <Card className="max-w-4xl">
            <CardHeader className="px-4 py-3">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold text-lg">New Authentication Feature</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary">3 messages</Badge>
                            <span className="text-sm text-muted-foreground">Last updated today</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Reply className="h-4 w-4 mr-2"/>
                            Reply All
                        </Button>
                        <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="px-4">
                <div className="space-y-4">
                    {emails.map((email, index) => (
                        <Card key={email.id}>
                            <CardHeader className="px-4 py-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={email.avatar}/>
                                            <AvatarFallback>{email.initials}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-medium text-sm">{email.sender}</h3>
                                                <span className="text-xs text-muted-foreground">{email.time}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">{email.email}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleExpanded(index)}
                                        className="h-8 w-8 p-0"
                                    >
                                        {expandedEmails.has(index) ?
                                            <ChevronUp className="h-4 w-4"/> :
                                            <ChevronDown className="h-4 w-4"/>
                                        }
                                    </Button>
                                </div>

                                {!expandedEmails.has(index) && (
                                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                        {email.preview}
                                    </p>
                                )}
                            </CardHeader>

                            {expandedEmails.has(index) && (
                                <CardContent className="px-4 pt-0 pb-4">
                                    <div className="space-y-3">
                                        <div className="whitespace-pre-line text-sm">
                                            {email.content}
                                        </div>

                                        {email.attachments.length > 0 && (
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-medium flex items-center gap-2">
                                                    <Paperclip className="h-4 w-4"/>
                                                    Attachments
                                                </h4>
                                                {email.attachments.map((attachment, i) => (
                                                    <div key={i} className="flex flex-wrap items-center gap-3 p-3 bg-muted/50 rounded border">
                                                        <div className="flex items-center gap-2 min-w-0 flex-1">
                                                            <Paperclip className="h-4 w-4 text-muted-foreground flex-shrink-0"/>
                                                            <div className="min-w-0 flex-1">
                                                                <p className="text-sm font-medium truncate">{attachment.name}</p>
                                                                <p className="text-xs text-muted-foreground">{attachment.size}</p>
                                                            </div>
                                                        </div>
                                                        <Button variant="outline" size="sm">Download</Button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <Separator/>

                                        <div className="flex flex-wrap items-center gap-2">
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
                                        </div>
                                    </div>
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
