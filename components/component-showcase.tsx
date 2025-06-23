"use client"

import {useState} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Button} from "@/components/ui/button"
import {ResizablePanelGroup, ResizablePanel, ResizableHandle} from "@/components/ui/resizable"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Monitor, Tablet, Smartphone, Copy, Check} from "lucide-react"
import {cn} from "@/lib/utils"

interface ComponentShowcaseProps {
    previewUrl: string
    code: string
    title: string
    description?: string
}

type ViewportSize = "desktop" | "tablet" | "mobile"

const viewportSizes = {
    desktop: {width: "100%", icon: Monitor},
    tablet: {width: "768px", icon: Tablet},
    mobile: {width: "375px", icon: Smartphone},
}

export function ComponentShowcase({
                                      previewUrl,
                                      code,
                                      title,
                                      description,
                                  }: ComponentShowcaseProps) {
    const [viewport, setViewport] = useState<ViewportSize>("desktop")
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error("Failed to copy code:", error)
        }
    }

    return (
        <div className="w-full">
            <div className="mb-4">
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                {description && (
                    <p className="text-sm text-muted-foreground mt-1">{description}</p>
                )}
            </div>

            <Tabs defaultValue="preview" className="w-full">
                <div className="flex items-center justify-between">
                    <TabsList>
                        <TabsTrigger
                            value="preview"
                        >
                            Preview
                        </TabsTrigger>
                        <TabsTrigger
                            value="code"
                        >
                            Code
                        </TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center border rounded-lg p-1">
                            {Object.entries(viewportSizes).map(([key, {icon: Icon}]) => (
                                <Button
                                    key={key}
                                    variant="ghost"
                                    size="sm"
                                    className={cn(
                                        "h-8 w-8 p-0",
                                        viewport === key && "bg-muted"
                                    )}
                                    onClick={() => setViewport(key as ViewportSize)}
                                >
                                    <Icon className="h-4 w-4"/>
                                    <span className="sr-only">{key} view</span>
                                </Button>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8"
                            onClick={copyToClipboard}
                        >
                            {copied ? (
                                <Check className="h-4 w-4"/>
                            ) : (
                                <Copy className="h-4 w-4"/>
                            )}
                            <span className="sr-only">Copy code</span>
                        </Button>
                    </div>
                </div>

                <TabsContent value="preview" className="mt-0">
                    <ResizablePanelGroup direction="horizontal" className="border rounded-b-lg">
                        <ResizablePanel defaultSize={100} minSize={30}>
                            <div className="h-[600px] w-full">
                                <div
                                    className="mx-auto h-full transition-all duration-300 ease-in-out"
                                    style={{
                                        width: viewportSizes[viewport].width,
                                        maxWidth: "100%",
                                    }}
                                >
                                    <iframe
                                        src={previewUrl}
                                        className="w-full h-full border-0 bg-background"
                                        title={`${title} Preview`}
                                    />
                                </div>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle className="w-1 bg-border hover:bg-border/80"/>
                        <ResizablePanel defaultSize={0} minSize={0}/>
                    </ResizablePanelGroup>
                </TabsContent>

                <TabsContent value="code" className="mt-0">
                    <div className="border rounded-b-lg">
                        <ScrollArea className="h-[600px] w-full">
              <pre className="p-4 text-sm">
                <code className="text-foreground">{code}</code>
              </pre>
                        </ScrollArea>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
