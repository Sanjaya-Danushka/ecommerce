"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { useCartStore } from "@/store/cart-store"

const NAV_LINKS = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const totalItems = useCartStore((s) => s.totalItems)
  const count = totalItems()

  return (
    <nav
      className="border-b border-light-300 bg-light-100 font-jost"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="/logo.svg"
            alt="Nike"
            width={80}
            height={29}
            className="invert"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base-medium text-dark-900 transition-colors hover:text-dark-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            aria-label="Search"
            className="text-base-medium text-dark-900 transition-colors hover:text-dark-700"
          >
            <span className="hidden sm:inline">Search</span>
            <Search className="h-5 w-5 sm:hidden" aria-hidden="true" />
          </button>

          <Link
            href="/cart"
            className="text-base-medium text-dark-900 transition-colors hover:text-dark-700"
          >
            My Cart ({count})
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="text-dark-900 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-light-300 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base-medium block rounded-md px-3 py-2 text-dark-900 transition-colors hover:bg-light-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
