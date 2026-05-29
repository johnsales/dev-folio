export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} Johnathan Santiago. All rights reserved.</p>
        <p>Built with Next.js, Framer Motion &amp; Lenis</p>
      </div>
    </footer>
  )
}
