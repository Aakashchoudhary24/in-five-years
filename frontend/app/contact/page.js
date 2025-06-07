import { ThemeToggle } from "@/components/theme/theme-toggle";
import Navbar from "@/components/ui/navbar";

const contacts = [
  { href: "mailto:aakashchoudhary@example.com", label: "EMAIL" },
  { href: "https://github.com/aakashchoudhary", label: "GITHUB" },
  { href: "https://linkedin.com/in/aakashchoudhary", label: "LINKEDIN" },
  { href: "https://instagram.com/aakash.choudhary", label: "INSTAGRAM" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <div className="relative flex-col top-50 justify-center">
        <h1 className="text-[160px] text-center font-bold">GET IN TOUCH</h1>
        <div className="flex flex-row justify-center gap-10">
        {contacts.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold"
          >
            {label}
          </a>
        ))}
        </div>
      </div>
    </>
  );
}
