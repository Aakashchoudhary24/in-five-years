import { ThemeToggle } from "@/components/theme/theme-toggle";
import Navbar from "@/components/ui/navbar";

const contacts = [
  { href: "mailto:aakashchoudhary724@gmail.com", label: "EMAIL" },
  { href: "https://github.com/aakashchoudhary24", label: "GITHUB" },
  { href: "https://linkedin.com/in/aakashchoudhary24", label: "LINKEDIN" },
  { href: "https://instagram.com/aakash._2407", label: "INSTAGRAM" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <div className="relative flex-col top-45 justify-center">
        <h1 className="text-[200px] text-center wrap-break-word font-bold">GET IN TOUCH</h1>
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
