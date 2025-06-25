import {ComponentShowcase} from "@/components/component-showcase"
import {buildFileStructure} from "@/lib/file-reader"
import Section from "@/components/section"

export default async function EmailLayoutsPage() {
    const filePaths = [
        "components/composites/email-layouts/inbox-email.tsx"
    ]

    const files = await buildFileStructure(filePaths)

    return (
        <Section>
            <ComponentShowcase
                previewUrl="/preview/inbox-email"
                files={files}
                title="Inbox Email Layout"
                description="A complete email client interface with sidebar inbox, email content area, and interactive controls built using shadcn/ui components."
            />
        </Section>
    )
}
