import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import {
    Reply,
    Forward,
    Bookmark,
    ExternalLink,
    Calendar,
    Users,
    TrendingUp
} from "lucide-react"

export function NewsletterEmail() {
    return (
        <Card className="max-w-3xl">
            <CardHeader className="px-6 py-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://avatar.vercel.sh/techdaily"/>
                            <AvatarFallback>TD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold text-lg">Tech Daily Newsletter</h3>
                            <p className="text-sm text-muted-foreground">newsletter@techdaily.com</p>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">Newsletter</Badge>
                                <Badge variant="secondary">Weekly</Badge>
                                <span className="text-xs text-muted-foreground">Dec 28, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Bookmark className="h-4 w-4"/>
                        </Button>
                        <Button variant="outline" size="sm">
                            <Forward className="h-4 w-4"/>
                        </Button>
                        <Button variant="outline" size="sm">
                            <Reply className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="px-6">
                <div className="space-y-6">
                    {/* Newsletter Header */}
                    <div className="text-center space-y-2 py-4 border-b">
                        <h1 className="text-2xl font-bold">This Week in Tech</h1>
                        <p className="text-muted-foreground">Issue #47 • December 28, 2024</p>
                        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                            Your weekly dose of the latest technology trends, product launches, and industry insights.
                        </p>
                    </div>

                    {/* Feature Story */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary"/>
                            <h2 className="text-xl font-semibold">Featured Story</h2>
                        </div>
                        <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                            <CardContent className="p-5">
                                <h3 className="font-semibold text-lg mb-2">
                                    AI Development Tools See 300% Growth in 2024
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    The AI development landscape has exploded this year, with new tools and platforms
                                    making machine learning more accessible to developers worldwide. From code generation
                                    to automated testing, AI is transforming how we build software.
                                </p>
                                <Button variant="outline" size="sm">
                                    <ExternalLink className="h-4 w-4 mr-2"/>
                                    Read Full Article
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <Separator/>

                    {/* News Sections */}
                    <div className="space-y-5">
                        <h2 className="text-xl font-semibold">This Week&apos;s Headlines</h2>

                        <div className="grid gap-4">
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start gap-3">
                                        <div className="space-y-2 flex-1">
                                            <Badge variant="outline" className="text-xs">Product Launch</Badge>
                                            <h3 className="font-medium leading-tight">
                                                Microsoft Releases New Development Framework
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                The new framework promises 40% faster build times and improved debugging capabilities.
                                            </p>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <ExternalLink className="h-4 w-4"/>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start gap-3">
                                        <div className="space-y-2 flex-1">
                                            <Badge variant="outline" className="text-xs">Acquisition</Badge>
                                            <h3 className="font-medium leading-tight">
                                                GitHub Acquires AI-Powered Code Review Startup
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                The acquisition aims to enhance GitHub&apos;s automated code review capabilities.
                                            </p>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <ExternalLink className="h-4 w-4"/>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start gap-3">
                                        <div className="space-y-2 flex-1">
                                            <Badge variant="outline" className="text-xs">Security</Badge>
                                            <h3 className="font-medium leading-tight">
                                                New Security Vulnerability Found in Popular Package
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Developers urged to update to the latest version immediately.
                                            </p>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <ExternalLink className="h-4 w-4"/>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <Separator/>

                    {/* Upcoming Events */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary"/>
                            <h2 className="text-xl font-semibold">Upcoming Events</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded">
                                <div className="text-center min-w-0">
                                    <p className="text-sm font-medium">Jan</p>
                                    <p className="text-lg font-bold">15</p>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium">React Conference 2025</h4>
                                    <p className="text-sm text-muted-foreground">Virtual • 9:00 AM PST</p>
                                </div>
                                <Button variant="outline" size="sm">RSVP</Button>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded">
                                <div className="text-center min-w-0">
                                    <p className="text-sm font-medium">Jan</p>
                                    <p className="text-lg font-bold">22</p>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium">AI & Machine Learning Summit</h4>
                                    <p className="text-sm text-muted-foreground">San Francisco • 10:00 AM PST</p>
                                </div>
                                <Button variant="outline" size="sm">RSVP</Button>
                            </div>
                        </div>
                    </div>

                    <Separator/>

                    {/* Footer */}
                    <div className="text-center space-y-3 py-4 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                            <Users className="h-4 w-4"/>
                            <span>Join 50,000+ developers who trust Tech Daily</span>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <Button variant="ghost" size="sm" className="text-xs">
                                Update Preferences
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs">
                                Unsubscribe
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs">
                                View in Browser
                            </Button>
                        </div>
                        <p className="text-xs">
                            © 2024 Tech Daily. All rights reserved.<br/>
                            123 Tech Street, San Francisco, CA 94105
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
