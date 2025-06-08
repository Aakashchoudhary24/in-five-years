import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"

export const metadata = {
  title: "Lifemaxxing",
  description: "My personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
