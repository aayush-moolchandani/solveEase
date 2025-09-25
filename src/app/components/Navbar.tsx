'use client'
import Link from 'next/link'
import { useMemo } from 'react'

export default function Navbar() {
  const links = useMemo(() => [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services' },
    { href: '/#workers', label: 'Workers' },
  ], [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">SolveEase</Link>
        <ul className="flex items-center gap-4 text-sm">
          {links.map(link => (
            <li key={link.href}>
              <Link className="hover:underline underline-offset-4" href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}


