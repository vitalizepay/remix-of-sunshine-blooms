import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
 
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#activities", label: "Activities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#admissions", label: "Admissions" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Sunshine Pre School & Academy" className="h-12 w-auto md:h-14 drop-shadow-md" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 font-fun text-sm font-medium text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#admissions"
          className="hidden rounded-full bg-blue-grad px-6 py-2.5 font-fun font-semibold text-primary-foreground shadow-soft transition hover:scale-105 lg:inline-block"
        >
          Enroll Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="rounded-full bg-white p-2 shadow-soft lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mb-4 rounded-3xl bg-white p-4 shadow-pop lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-2xl px-4 py-3 font-fun font-medium hover:bg-primary/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#admissions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-blue-grad px-4 py-3 text-center font-fun font-semibold text-primary-foreground"
            >
              Enroll Now
            </a>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
