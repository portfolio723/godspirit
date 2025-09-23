import Link from "next/link";
import { Sprout, Twitter, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
];

const footerNav = [
  { href: "#about", label: "About" },
  { href: "#messages", label: "Messages" },
  { href: "#insights", label: "Insights" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/40 bg-card">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">
                Divine Canvas
              </span>
            </Link>
            <p className="text-muted-foreground">
              Guiding souls towards divine prosperity and purpose.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
             <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
             <p className="mt-4 text-muted-foreground">contact@divinecanvas.org</p>
          </div>
        </div>
        <div className="border-t border-border/40 py-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Divine Canvas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
