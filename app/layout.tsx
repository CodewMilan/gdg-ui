import type { Metadata } from "next";
import "./globals.css";
import FloatingNavbar from "@/components/FloatingNavbar";

// Google Sans is loaded via CSS import in globals.css

export const metadata: Metadata = {
  title: "GDG BMS Institute of Technology - Google Cloud Study Jams",
  description: "Google Developer Group BMS Institute of Technology - Google Cloud Study Jams 25-26 Dashboard",
  keywords: ["GDG", "Google Developer Group", "BMS Institute", "Google Cloud", "Study Jams"],
  icons: {
    icon: '/gdg-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
