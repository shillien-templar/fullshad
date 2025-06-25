export default function ShowcasePagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen p-4">
            {children}
        </div>
    );
}
