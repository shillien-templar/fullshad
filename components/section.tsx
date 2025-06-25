export default function Section({children}: {children?: React.ReactNode}) {
    return (
        <section className="py-8">
            <div className="mx-auto px-4 max-w-7xl">
                {children}
            </div>
        </section>
    );
}
