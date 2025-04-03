"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { CircleIcon } from "@/components/Icons";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={classNames(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-blue-600 dark:text-blue-400"
            : "hover:text-blue-600 dark:hover:text-blue-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-800/90 dark:text-slate-200 dark:ring-white/10">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/docs">Docs</NavItem>
        <NavItem href="/pricing">Pricing</NavItem>
      </ul>
    </nav>
  );
}

function MobileNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex flex-col space-y-3">
        <li>
          <Link
            href="/"
            className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/docs"
            className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          >
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Disclosure.Button as={Link} href={href} className="block py-2">
        {children}
      </Disclosure.Button>
    </li>
  );
}

function MobileNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="space-y-2">
        <MobileNavItem href="/">Home</MobileNavItem>
        <MobileNavItem href="/about">About</MobileNavItem>
        <MobileNavItem href="/blog">Blog</MobileNavItem>
        <MobileNavItem href="/docs">Docs</MobileNavItem>
        <MobileNavItem href="/pricing">Pricing</MobileNavItem>
      </ul>
    </nav>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8">
      <Container>
        <div className="mr-6 flex lg:hidden">
          <MobileNavigation className="pointer-events-auto" />
        </div>
        <div className="relative flex flex-grow basis-0 items-center">
          <Link href="/" aria-label="Home page">
            Logo
          </Link>
        </div>
        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
          <ThemeSwitch className="relative z-10" />
          <div className="flex items-center gap-6">
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>
        </div>
      </Container>
    </header>
  );
}
