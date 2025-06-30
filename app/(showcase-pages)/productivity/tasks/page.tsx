import {ComponentShowcase} from "@/components/component-showcase"
import {buildFileStructure} from "@/lib/file-reader"
import Section from "@/components/section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Task Management Components - FullShad",
    description: "Task management and Kanban board components built with shadcn/ui. Multiple variations for project management, task tracking, and workflow visualization.",
    keywords: ["kanban board", "task management", "project management", "shadcn", "react components", "productivity", "tasks"],
    openGraph: {
        title: "Task Management Components - FullShad",
        description: "Task management and Kanban board components built with shadcn/ui for project management and workflow visualization.",
        type: "website",
    },
}

export default async function TasksPage() {
    const essentialKanbanFiles = await buildFileStructure([
        "components/composites/productivity/tasks/essential-kanban-board.tsx"
    ])

    const compactKanbanFiles = await buildFileStructure([
        "components/composites/productivity/tasks/compact-kanban-board.tsx"
    ])

    const tabbedKanbanFiles = await buildFileStructure([
        "components/composites/productivity/tasks/tabbed-kanban-board.tsx"
    ])

    return (
        <div className="space-y-16">
            <Section>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Task Management</h1>
                    <p className="text-muted-foreground mt-2">
                        Comprehensive task management components built with shadcn/ui. From traditional Kanban boards 
                        to innovative tabbed interfaces, choose the perfect layout for your project management needs.
                    </p>
                </div>
            </Section>

            <Section>
                <ComponentShowcase
                    previewUrl="/preview/essential-kanban-board"
                    files={essentialKanbanFiles}
                    title="Essential Kanban Board"
                    description="A comprehensive Kanban board with multiple columns, detailed task cards, priority indicators, assignee avatars, and rich metadata including due dates, comments, and attachments."
                />
            </Section>

            <Section>
                <ComponentShowcase
                    previewUrl="/preview/compact-kanban-board"
                    files={compactKanbanFiles}
                    title="Compact Kanban Board"
                    description="A space-efficient Kanban board design with condensed task cards, priority dots, and minimalist layout perfect for dashboards with limited space."
                />
            </Section>

            <Section>
                <ComponentShowcase
                    previewUrl="/preview/tabbed-kanban-board"
                    files={tabbedKanbanFiles}
                    title="Tabbed Kanban Board"
                    description="An innovative tabbed approach to Kanban boards where each column becomes a tab. Perfect for focused task management and detailed task views."
                />
            </Section>
        </div>
    )
}