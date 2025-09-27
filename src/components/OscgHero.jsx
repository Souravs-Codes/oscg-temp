import { useState } from 'react'
import { FaCodeBranch } from 'react-icons/fa'

// Google Fonts:
// Montserrat: https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap
// Roboto: https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap

const OscgHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Guides', href: '#guides' },
    { label: 'Community', href: '#community' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-text">
      <nav
        className="sticky top-0 z-10 border-b border-surface/60 bg-background/90 backdrop-blur"
        aria-label="Primary"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#top"
            className="text-2xl font-heading font-semibold tracking-tight text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            OSCG
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-surface/60 text-primary transition hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-[2px] w-5 rounded bg-primary transition-transform ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
              <span className={`block h-[2px] w-4 rounded bg-primary transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-[2px] w-5 rounded bg-primary transition-transform ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
            </span>
          </button>

          <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative font-body transition-colors duration-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center md:flex">
            <a
              href="/login"
              className="rounded-full border border-surface/80 px-4 py-2 font-medium text-primary transition duration-200 hover:border-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Register Now
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mx-auto block w-full max-w-6xl px-6 pb-6 md:hidden">
            <ul className="space-y-3 rounded-2xl border border-surface/60 bg-surface/90 p-4 shadow-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block rounded-full px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/login"
                  className="block rounded-full border border-surface/80 px-4 py-2 text-center text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <main className="flex flex-grow items-center bg-background">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-6 py-16 text-center lg:py-24">
          <div className="relative flex w-full justify-center">
            <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-surface/80 bg-surface/80 p-6 shadow-lg shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1526378803927-0c43b6c93a67?auto=format&fit=crop&w=900&q=80"
                alt="Abstract 3D network representing global open source collaboration"
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-background/80 p-4 text-sm text-text shadow-lg">
                <p className="font-heading text-base font-semibold text-primary">Collaborate in Real-Time</p>
                <p className="mt-2 text-xs text-muted">
                  Join thousands of builders shipping impactful open-source features across the globe.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -top-12 right-6 hidden h-24 w-24 rounded-full bg-accent/30 blur-3xl sm:block"></div>
            <div className="pointer-events-none absolute -bottom-16 left-0 hidden h-32 w-32 rounded-full bg-status/20 blur-3xl lg:block"></div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <span className="inline-flex items-center rounded-full bg-surface/80 px-5 py-2 text-sm font-medium text-accent shadow-sm">
              Open Source Collaborative Initiative
            </span>
            <h1 className="max-w-3xl text-4xl font-heading font-semibold leading-tight text-primary md:text-5xl lg:text-6xl">
              Your Gateway to Meaningful Open Source.
            </h1>
            <p className="max-w-2xl text-lg text-text/80 md:text-xl">
              Find projects that matter, collaborate with a global community, and make your first (or next) great contribution.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="rounded-full bg-primary px-6 py-3 font-medium text-white shadow-sm transition duration-200 hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore Projects
              </button>
              <a
                href="#community"
                className="rounded-full border border-accent/40 px-6 py-3 text-sm font-semibold text-accent transition duration-200 hover:border-accent hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Join Our Community
              </a>
              <div className="flex items-center gap-2 text-sm font-medium text-text/80">
                <span className="inline-flex h-3 w-3 rounded-full bg-status"></span>
                3,000+ Active Projects
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted">
              <FaCodeBranch aria-hidden="true" className="text-accent" />
              <span className="font-medium text-text">New contributions welcome on featured projects.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OscgHero