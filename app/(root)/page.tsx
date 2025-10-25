import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      {/* Hero Image - Simple responsive container */}
      <div className="w-full max-w-2xl mx-auto my-5">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
          <Image
            src="/hero.svg"
            alt="Hero Section"
            fill
            className="object-contain p-4" // Contain + padding for breathing room
            priority
          />
        </div>
      </div>

      {/* Rest unchanged */}
      <h1 className="z-20 text-5xl sm:text-6xl mt-6 font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 tracking-tight leading-tight">
        WebCode Editor With Intelligence
      </h1>

      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
        WebCode Editor is a powerful and intelligent code editor that enhances
        your coding experience with advanced features and seamless integration.
        It is designed to help you write, debug, and optimize your code
        efficiently.
      </p>

      <Link href="/dashboard">
        <Button variant="brand" className="mb-4" size="lg">
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </div>
  );
}