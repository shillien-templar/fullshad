import { ComponentShowcase } from "@/components/component-showcase"

const exampleFiles = [
  {
    name: "components",
    type: "folder" as const,
    path: "components",
    children: [
      {
        name: "example-card.tsx",
        type: "file" as const,
        path: "components/example-card.tsx",
        content: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ExampleCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Example Component</CardTitle>
          <Badge variant="secondary">New</Badge>
        </div>
        <CardDescription>
          This is an example composite component showcasing how the preview system works.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            This card demonstrates the iframe preview system with responsive controls.
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm">Primary Action</Button>
          <Button variant="outline" size="sm">Secondary</Button>
        </div>
      </CardContent>
    </Card>
  )
}`
      },
      {
        name: "ui",
        type: "folder" as const,
        path: "components/ui",
        children: [
          {
            name: "card.tsx",
            type: "file" as const,
            path: "components/ui/card.tsx",
            content: `import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// ... rest of card components`
          },
          {
            name: "button.tsx",
            type: "file" as const,
            path: "components/ui/button.tsx",
            content: `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // ... more variants
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        // ... more sizes
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// ... rest of button component`
          }
        ]
      }
    ]
  },
  {
    name: "app",
    type: "folder" as const,
    path: "app",
    children: [
      {
        name: "page.tsx",
        type: "file" as const,
        path: "app/page.tsx",
        content: `import { ExampleCard } from "@/components/example-card"

export default function ExampleCardPreview() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ExampleCard />
    </div>
  )
}`
      }
    ]
  }
]

export default function ShowcaseDemo() {
  return (
    <div className="container mx-auto py-8">
      <ComponentShowcase
        previewUrl="/preview/example-card"
        files={exampleFiles}
        title="Example Card Component"
        description="A sample composite component demonstrating the showcase functionality with responsive preview and multi-file code view."
      />
    </div>
  )
}