import Image from "next/image"
import Link from "next/link"

const FOOTER_SECTIONS = [
  {
    title: "Featured",
    links: [
      { label: "Air Force 1", href: "/featured/air-force-1" },
      { label: "Huarache", href: "/featured/huarache" },
      { label: "Air Max 90", href: "/featured/air-max-90" },
      { label: "Air Max 95", href: "/featured/air-max-95" },
    ],
  },
  {
    title: "Shoes",
    links: [
      { label: "All Shoes", href: "/shoes" },
      { label: "Custom Shoes", href: "/shoes/custom" },
      { label: "Jordan Shoes", href: "/shoes/jordan" },
      { label: "Running Shoes", href: "/shoes/running" },
    ],
  },
  {
    title: "Clothing",
    links: [
      { label: "All Clothing", href: "/clothing" },
      { label: "Modest Wear", href: "/clothing/modest-wear" },
      { label: "Hoodies & Pullovers", href: "/clothing/hoodies-pullovers" },
      { label: "Shirts & Tops", href: "/clothing/shirts-tops" },
    ],
  },
  {
    title: "Kids'",
    links: [
      { label: "Infant & Toddler Shoes", href: "/kids/infant-toddler" },
      { label: "Kids' Shoes", href: "/kids/shoes" },
      { label: "Kids' Jordan Shoes", href: "/kids/jordan" },
      { label: "Kids' Basketball Shoes", href: "/kids/basketball" },
    ],
  },
] as const

const SOCIAL_LINKS = [
  { icon: "/x.svg", alt: "X", href: "https://x.com" },
  { icon: "/facebook.svg", alt: "Facebook", href: "https://facebook.com" },
  { icon: "/instagram.svg", alt: "Instagram", href: "https://instagram.com" },
] as const

const LEGAL_LINKS = [
  { label: "Guides", href: "/guides" },
  { label: "Terms of Sale", href: "/terms-of-sale" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Nike Privacy Policy", href: "/privacy-policy" },
] as const

export function Footer() {
  return (
    <footer className="bg-dark-900 font-jost text-light-100" role="contentinfo">
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-12 lg:px-12">
        {/* Top section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" aria-label="Home">
              <Image
                src="/logo.svg"
                alt="Nike"
                width={80}
                height={29}
              />
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-base-medium mb-4 text-light-100">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-base-regular text-dark-500 transition-colors hover:text-light-100"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-4 lg:items-start">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-80"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-700 pt-8 sm:flex-row">
          <p className="text-sm-regular text-dark-500">
            <span className="mr-2" aria-hidden="true">
              📍
            </span>
            Croatia &nbsp;&nbsp; &copy; {new Date().getFullYear()} Nike, Inc.
            All Rights Reserved
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm-regular text-dark-500 transition-colors hover:text-light-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
