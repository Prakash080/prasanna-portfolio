import { Space_Grotesk } from "next/font/google";
import "./global.css";
import { ThemeProvider } from "@/components/theme-provider";

const font = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inject theme detection script before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storedTheme = localStorage.getItem("theme");
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = storedTheme || (systemDark ? "dark" : "light");
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${font.variable} antialiased`}
        cz-shortcut-listen="true"
      >
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
