import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css"

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen p-4">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}