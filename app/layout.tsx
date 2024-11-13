//app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Pranay Gupta | Software Engineer",
  description: "Pranay Gupta's personal website",
  openGraph: {
    type: "website",
    url: "http://localhost:3000/",
    title: "Pranay Gupta | Software Engineer",
    description: "Pranay Gupta's personal website",
    siteName: "Pranay Gupta",
    images: [
      {
        url: "https://media.licdn.com/dms/image/C4E16AQH4HsJhIekR2w/profile-displaybackgroundimage-shrink_350_1400/0/1644255243437?e=1729123200&v=beta&t=lSypdzeTOFt4qlayMDlMxOBwA4MAAIiO7AAzy8v9m3s",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/PG.png" />
        </head>
        <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </>
  );
}
