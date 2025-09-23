"use client";

import Link from "next/link";
import { Menu, Sprout } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#messages", label: "Messages" },
  { href: "#insights", label: "Insights" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-6 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold text-primary">
              Divine Canvas
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 p-6">
                <SheetClose asChild>
                  <Link href="/" className="mb-6 flex items-center space-x-2">
                    <Sprout className="h-8 w-8 text-primary" />
                    <span className="font-headline text-2xl font-bold text-primary">
                      Divine Canvas
                    </span>
                  </Link>
                </SheetClose>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

           <div className="hidden md:flex">
             <Button asChild>
                <Link href="#contact">Get In Touch</Link>
             </Button>
           </div>
        </div>
      </div>
    </header>
  );
}
