import { ComponentShowcase } from "@/components/component-showcase"

const exampleCode = `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ExampleCardPreview() {
  return (
    <div className="flex items-center justify-center min-h-screen">
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
    </div>
  )
}`

export default function ShowcaseDemo() {
  return (
    <div className="container mx-auto py-8">
      <ComponentShowcase
        previewUrl="/preview/example-card"
        code={exampleCode}
        title="Example Card Component"
        description="A sample composite component demonstrating the showcase functionality with responsive preview and code view."
      />
    </div>
  )
}