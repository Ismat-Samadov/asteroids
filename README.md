# Asteroids

A modern, responsive remake of the classic **Asteroids** arcade game, built with **Next.js 15** and **HTML5 Canvas**.

![Asteroids Game](https://img.shields.io/badge/game-asteroids-cyan?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)

## Features

- **Authentic arcade gameplay** — rotation, thrust, inertia, screen wrapping
- **Progressive difficulty** — asteroids get faster each level; large ones split into smaller fragments
- **Particle effects** — thruster exhaust, explosion bursts, glowing bullets
- **Twinkling starfield** — procedurally generated background
- **Neon aesthetic** — dark space theme with cyan glow on ship and bullets
- **Responsive canvas** — fills any screen size and reacts to window resize
- **Mobile-friendly** — on-screen touch buttons for rotate, thrust, and fire
- **3 lives system** — brief invincibility on respawn with flicker animation
- **Score & level HUD** — persistent score, lives indicator, and current level

## Controls

### Keyboard
| Key | Action |
|-----|--------|
| `←` / `A` | Rotate left |
| `→` / `D` | Rotate right |
| `↑` / `W` | Thrust forward |
| `Space` / `X` | Fire |
| `Enter` / `Space` | Start / Restart |

### Mobile / Touch
Four on-screen buttons appear on small screens:
- **◄ ►** — Rotate left / right
- **▲** — Thrust
- **FIRE** — Shoot

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Gameplay

- **Large asteroid** — 20 pts, splits into 2 medium
- **Medium asteroid** — 50 pts, splits into 2 small
- **Small asteroid** — 100 pts, destroyed completely
- Clear all asteroids to advance to the next level
- You have **3 lives** — colliding with an asteroid destroys your ship
- A brief **invincibility period** protects you after each respawn

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 (App Router) | Framework & routing |
| TypeScript | Type safety |
| HTML5 Canvas | Game rendering |
| Tailwind CSS 4 | UI styling |
| React hooks (`useRef`, `useEffect`, `useCallback`) | Game loop & state |

## Project Structure

```
app/
  components/
    AsteroidsGame.tsx   # Full game engine + UI component
  globals.css           # Global resets and base styles
  icon.svg              # Browser favicon
  layout.tsx            # Root layout with metadata
  page.tsx              # Entry page
```

## License

MIT
