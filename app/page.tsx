export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Welcome to v0</h1>
        <p className="text-lg text-muted-foreground">Your Next.js project is ready to go!</p>
        <p className="text-sm text-muted-foreground max-w-md">
          Start editing <code className="bg-muted px-2 py-1 rounded text-foreground">app/page.tsx</code> to see changes.
        </p>
      </div>
    </main>
  )
}
