import {ComponentShowcase} from "@/components/component-showcase"
import {buildFileStructure} from "@/lib/file-reader"
import Section from "@/components/section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Email Layouts - FullShad",
    description: "Complete email client interfaces and email layouts built with shadcn/ui components. Copy-paste ready email UIs for your projects.",
    keywords: ["email layouts", "email UI", "shadcn", "react components", "inbox", "email client"],
    openGraph: {
        title: "Email Layouts - FullShad",
        description: "Complete email client interfaces and email layouts built with shadcn/ui components.",
        type: "website",
    },
}

export default async function EmailLayoutsPage() {
    const inboxFiles = await buildFileStructure([
        "components/composites/email-layouts/inbox-email.tsx"
    ])

    const compactFiles = await buildFileStructure([
        "components/composites/email-layouts/compact-email.tsx"
    ])

    const conversationFiles = await buildFileStructure([
        "components/composites/email-layouts/conversation-thread.tsx"
    ])

    const simpleCardFiles = await buildFileStructure([
        "components/composites/email-layouts/simple-email-card.tsx"
    ])

    const newsletterFiles = await buildFileStructure([
        "components/composites/email-layouts/newsletter-email.tsx"
    ])

    return (
        <div className="space-y-16">
            <Section>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Email Layouts</h1>
                    <p className="text-muted-foreground mt-2">
                        Complete email client interfaces and email layouts built with shadcn/ui components. 
                        Choose from different styles and layouts for your email applications.
                    </p>
                </div>
            </Section>

            <Section>
                <ComponentShowcase
                    previewUrl="/preview/inbox-email"
                    files={inboxFiles}
                    title="Inbox Email Layout"
                    description="A complete email client interface with full email content, attachments, action buttons, and interactive controls."
                />
            </Section>

            <Section>
                <ComponentShowcase
                    previewUrl="/preview/compact-email"
                    files={compactFiles}
                    title="Compact Email Layout"
                    description="A space-efficient email layout with condensed elements, smaller padding, and optimized for dense information display."
                />
            </Section>

            <Section>
                <ComponentShowcase
                    previewUrl="/preview/conversation-thread"
                    files={conversationFiles}
                    title="Conversation Thread"
                    description="An email thread interface with expandable/collapsible messages, perfect for displaying email conversations and replies."
                />
            </Section>

            <Section>
                <ComponentShowcase
                    previewUrl="/preview/simple-email-card"
                    files={simpleCardFiles}
                    title="Simple Email Card"
                    description="A clean, minimal email card layout focused on essential information with preview text and quick actions."
                />
            </Section>

            <Section>
                <ComponentShowcase
                    previewUrl="/preview/newsletter-email"
                    files={newsletterFiles}
                    title="Newsletter Email"
                    description="A magazine-style newsletter layout with sections, featured content, news headlines, and event listings."
                />
            </Section>
        </div>
    )
}
