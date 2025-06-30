import {NewsletterEmail} from "@/components/composites/email-layouts/newsletter-email"

export default function NewsletterEmailPreview() {
    return (
        <div className="md:py-4">
            <div className="max-w-4xl mx-auto md:px-4">
                <NewsletterEmail/>
            </div>
        </div>
    )
}