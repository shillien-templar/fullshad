import {ConversationThread} from "@/components/composites/email-layouts/conversation-thread"

export default function ConversationThreadPreview() {
    return (
        <div className="md:py-4">
            <div className="max-w-4xl mx-auto md:px-4">
                <ConversationThread/>
            </div>
        </div>
    )
}