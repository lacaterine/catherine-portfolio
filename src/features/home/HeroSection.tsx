
import type { PointerEvent } from 'react'

const navigationItems = [
  { label: 'ABOUT ME', href: '#about', number: '01' },
  { label: 'SELECTED WORK', href: '#projects', number: '02' },
  { label: 'MY SKILLS', href: '#skills', number: '03' },
  { label: 'CONTACT', href: '#contact', number: '04' },
]

interface HeroArtworkProps {
  revealed?: boolean
}

function HeroArtwork({ revealed = false }: HeroArtworkProps) {
  return (
    <div
      className={`hero-scene ${revealed ? 'hero-scene-revealed' : ''}`}
    >
      <header className="hero-header">
        <a href="#home" className="hero-brand">
          CATHERINE ARCINIEGAS
        </a>

        <span className="hero-edition">PORTFOLIO / 2026</span>
      </header>

      <nav className="hero-navigation" aria-label="Main navigation">
        {navigationItems.map((item, index) => (
          <a
            key={item.number}
            href={item.href}
            className={`hero-nav-item hero-nav-item-${index + 1}`}
            tabIndex={revealed ? -1 : 0}
          >
            <span>{item.number}</span>
            <span>{item.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>

      <main className="hero-lettering">
        <span className="hero-eyebrow">
          DESIGN · TECHNOLOGY · CREATIVITY
        </span>

        <h1>
          CATHERINE
          <span className="hero-asterisk" aria-hidden="true">✳</span>
        </h1>

        <p className="hero-tagline">
          Creating <em>digital</em> experiences.
        </p>

        <span className="hero-role">
          FRONTEND DEVELOPER — REACT & UI
        </span>
      </main>

      <footer className="hero-footer">
        <span>BASED IN COLOMBIA</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </footer>
    </div>
  )
}

function HeroSection() {
  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== 'mouse') return

    const container = event.currentTarget
    const rect = container.getBoundingClientRect()

    const size = 220
    const halfSize = size / 2

    const x = Math.max(
      halfSize,
      Math.min(event.clientX - rect.left, rect.width - halfSize)
    )

    const y = Math.max(
      halfSize,
      Math.min(event.clientY - rect.top, rect.height - halfSize)
    )

    const top = y - halfSize
    const left = x - halfSize
    const right = rect.width - x - halfSize
    const bottom = rect.height - y - halfSize

    container.style.setProperty('--reveal-top', `${top}px`)
    container.style.setProperty('--reveal-right', `${right}px`)
    container.style.setProperty('--reveal-bottom', `${bottom}px`)
    container.style.setProperty('--reveal-left', `${left}px`)

    container.style.setProperty('--cursor-x', `${x}px`)
    container.style.setProperty('--cursor-y', `${y}px`)
  }

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="hero-editorial relative min-h-screen w-full overflow-hidden"
    >
      <HeroArtwork />

      <div className="hero-reveal-layer" aria-hidden="true">
        <HeroArtwork revealed />
      </div>

      <div className="hero-focus-frame" aria-hidden="true">
        <span className="hero-node hero-node-top-left" />
        <span className="hero-node hero-node-top-right" />
        <span className="hero-node hero-node-bottom-left" />
        <span className="hero-node hero-node-bottom-right" />
      </div>
    </section>
  )
}

export default HeroSection
