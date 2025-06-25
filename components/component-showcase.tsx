"use client"

import {useState} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Button} from "@/components/ui/button"
import {ResizablePanelGroup, ResizablePanel, ResizableHandle} from "@/components/ui/resizable"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Monitor, Tablet, Smartphone, Copy, Check, Folder, FolderOpen, File, ChevronRight, ChevronDown} from "lucide-react"
import {cn} from "@/lib/utils"
import {Card} from "@/components/ui/card"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface FileItem {
    name: string
    type: 'file' | 'folder'
    content?: string
    children?: FileItem[]
    path: string
}

interface ComponentShowcaseProps {
    previewUrl: string
    files: FileItem[]
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
                                      files,
                                      title,
                                      description,
                                  }: ComponentShowcaseProps) {
    const [viewport, setViewport] = useState<ViewportSize>("desktop")
    const [copied, setCopied] = useState(false)
    const [selectedFile, setSelectedFile] = useState<FileItem | null>(() => {
        // Find first file in the structure
        const findFirstFile = (items: FileItem[]): FileItem | null => {
            for (const item of items) {
                if (item.type === 'file') return item
                if (item.children) {
                    const found = findFirstFile(item.children)
                    if (found) return found
                }
            }
            return null
        }
        return findFirstFile(files)
    })
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())

    const copyToClipboard = async () => {
        try {
            const content = selectedFile?.content || ''
            await navigator.clipboard.writeText(content)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error("Failed to copy code:", error)
        }
    }

    const toggleFolder = (path: string) => {
        const newExpanded = new Set(expandedFolders)
        if (newExpanded.has(path)) {
            newExpanded.delete(path)
        } else {
            newExpanded.add(path)
        }
        setExpandedFolders(newExpanded)
    }

    const getLanguageFromFilename = (filename: string): string => {
        const extension = filename.split('.').pop()?.toLowerCase()
        switch (extension) {
            case 'tsx':
            case 'jsx':
                return 'jsx'
            case 'ts':
                return 'typescript'
            case 'js':
                return 'javascript'
            case 'css':
                return 'css'
            case 'html':
                return 'html'
            case 'json':
                return 'json'
            case 'md':
                return 'markdown'
            case 'py':
                return 'python'
            case 'java':
                return 'java'
            case 'cpp':
            case 'c':
                return 'cpp'
            case 'php':
                return 'php'
            case 'rb':
                return 'ruby'
            case 'go':
                return 'go'
            case 'rs':
                return 'rust'
            case 'sql':
                return 'sql'
            case 'xml':
                return 'xml'
            case 'yaml':
            case 'yml':
                return 'yaml'
            case 'bash':
            case 'sh':
                return 'bash'
            default:
                return 'text'
        }
    }

    const renderFileTree = (items: FileItem[], depth = 0) => {
        return items.map((item) => {
            const isExpanded = expandedFolders.has(item.path)
            const isSelected = selectedFile?.path === item.path

            return (
                <div key={item.path}>
                    <div
                        className={cn(
                            "flex items-center gap-1 px-2 py-1 text-sm cursor-pointer hover:bg-muted/50 rounded-sm",
                            isSelected && "bg-muted",
                        )}
                        style={{ paddingLeft: `${8 + depth * 16}px` }}
                        onClick={() => {
                            if (item.type === 'folder') {
                                toggleFolder(item.path)
                            } else {
                                setSelectedFile(item)
                            }
                        }}
                    >
                        {item.type === 'folder' ? (
                            <>
                                {isExpanded ? (
                                    <ChevronDown className="h-3 w-3" />
                                ) : (
                                    <ChevronRight className="h-3 w-3" />
                                )}
                                {isExpanded ? (
                                    <FolderOpen className="h-3 w-3" />
                                ) : (
                                    <Folder className="h-3 w-3" />
                                )}
                            </>
                        ) : (
                            <>
                                <div className="w-3" />
                                <File className="h-3 w-3" />
                            </>
                        )}
                        <span className="truncate">{item.name}</span>
                    </div>
                    {item.type === 'folder' && isExpanded && item.children && (
                        <div>
                            {renderFileTree(item.children, depth + 1)}
                        </div>
                    )}
                </div>
            )
        })
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

                <TabsContent value="preview" className="relative">
                    <Card className="p-0 overflow-hidden">
                        <ResizablePanelGroup direction="horizontal">
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
                            <ResizableHandle/>
                        </ResizablePanelGroup>
                    </Card>
                </TabsContent>

                <TabsContent value="code" className="mt-0">
                    <Card className="p-0 overflow-hidden">
                        <div className="flex">
                            {/* File tree sidebar */}
                            <div className="w-1/4 border-r bg-muted/20">
                                <div className="px-4 flex items-center border-b bg-muted/30 h-[40px]">
                                    <h3 className="text-sm font-medium">Files</h3>
                                </div>

                                <ScrollArea className="h-full">
                                    <div className="p-1">
                                        {renderFileTree(files)}
                                    </div>
                                </ScrollArea>
                            </div>

                            {/* Code content */}
                            <div className="w-3/4">
                                {selectedFile && (
                                    <div className="px-2 h-[40px] border-b bg-muted/30 flex items-center justify-between">
                                        <span className="text-sm font-medium truncate">{selectedFile.name}</span>
                                    </div>
                                )}
                                <ScrollArea className="flex-1 h-[560px] w-full">
                                    <div className="bg-[#1e1e1e]">
                                        {selectedFile?.content ? (
                                            <SyntaxHighlighter
                                                language={getLanguageFromFilename(selectedFile.name)}
                                                style={vscDarkPlus}
                                                showLineNumbers={true}
                                                lineNumberStyle={{
                                                    minWidth: '3em',
                                                    paddingRight: '1em',
                                                    color: '#858585',
                                                    fontSize: '0.875rem'
                                                }}
                                                customStyle={{
                                                    margin: 0,
                                                    padding: '1rem',
                                                    backgroundColor: '#1e1e1e',
                                                    fontSize: '0.875rem',
                                                    lineHeight: '1.5'
                                                }}
                                            >
                                                {selectedFile.content}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <div className="p-4 text-sm text-muted-foreground">
                                                Select a file to view its content
                                            </div>
                                        )}
                                    </div>
                                </ScrollArea>
                            </div>
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
