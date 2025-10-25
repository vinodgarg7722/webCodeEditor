'use client';

import Link from "next/link";
import {
  Github,
  Twitter,          // X (Twitter) icon
  MessageCircle,    // Discord-style chat bubble
  Linkedin,
  Youtube,
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/your-repo",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://twitter.com/yourhandle",
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter / X",
    },
    {
      href: "https://discord.gg/yourinvite",
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Discord",
    },
    {
      href: "https://linkedin.com/company/yourcompany",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com/@yourchannel",
      icon: <Youtube className="w-5 h-5" />,
      label: "YouTube",
    },
  ];

  return (
    <footer className="w-full mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glass-morphism pill footer */}
        <div
          className={`
            relative flex flex-col items-center justify-center
            bg-gradient-to-t from-white/90 via-gray-50/90 to-white/90
            dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
            backdrop-blur-md
            shadow-[0_-4px_30px_rgba(0,0,0,0.12)]
            border border-gray-200/70 dark:border-zinc-700/70
            rounded-3xl
            px-6 py-4
            text-center
            space-y-4
          `}
        >
          {/* Social Icons */}
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm 
                         hover:bg-gray-100 dark:hover:bg-zinc-700 
                         border border-gray-200/50 dark:border-zinc-700/50 
                         transition-all duration-200"
                aria-label={link.label}
              >
                <span className="text-zinc-500 dark:text-zinc-400 
                               group-hover:text-zinc-900 dark:group-hover:text-zinc-100 
                               transition-colors">
                  {link.icon}
                </span>
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} WebCode Editor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}