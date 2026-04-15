export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          Anastasios Giannakakis &mdash; Built with Next.js &amp; ♥ &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
