'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import UserButton from '../auth/components/user-button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Centered container with max width */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pill-shaped header with full rounded sides + top/bottom padding */}
        <div
          className={`
            relative flex items-center justify-between
            bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
            dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
            backdrop-blur-md
            shadow-[0_4px_30px_rgba(0,0,0,0.12)]
            border border-gray-200/70 dark:border-zinc-700/70
            rounded-3xl           /* Full pill: rounded top + bottom */
            px-6 py-4              /* Equal padding: top, bottom, left, right */
            transition-all duration-300
          `}
        >
          {/* LEFT: Logo + Desktop Nav */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="WebCode Editor"
                width={42}
                height={42}
                className="rounded-full bg-white p-0.5 shadow-sm ring-2 ring-gray-200 dark:ring-zinc-700"
                unoptimized
              />
              <span className="hidden sm:inline font-extrabold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">
                WebCode Editor
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5 text-sm">
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <Link
                href="/docs/components/background-paths"
                className="font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                Docs
              </Link>
              <Link
                href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
                target="_blank"
                className="flex items-center gap-1.5 font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                API
                <span className="ml-1 rounded-full border border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">
                  New
                </span>
              </Link>
            </nav>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Theme + User (always visible) */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <UserButton />
            </div>
          </div>
        </div>

        {/* Mobile Dropdown (same pill style) */}
        {mobileOpen && (
          <div className="absolute top-full left-4 right-4 mt-3 md:hidden">
            <div
              className={`
                bg-white dark:bg-zinc-900
                backdrop-blur-md
                border border-gray-200 dark:border-zinc-700
                rounded-3xl
                p-5 shadow-xl
                space-y-4
              `}
            >
              <Link
                href="/docs/components/background-paths"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header"
                target="_blank"
                className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400"
                onClick={() => setMobileOpen(false)}
              >
                API
                <span className="rounded-full border border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 text-xs font-semibold">
                  New
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}