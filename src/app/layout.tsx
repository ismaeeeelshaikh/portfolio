import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ismaeelshaikh.com"),
  title: "Ismaeel Shaikh | Full-Stack Developer & Cloud Enthusiast",
  description: "Portfolio of Ismaeel Shaikh, a Full-Stack Developer, Cloud & DevOps Enthusiast, and AI/ML Engineer. View my projects, experience, and technical skills.",
  keywords: ["Ismaeel Shaikh", "Full-Stack Developer", "Cloud Engineer", "DevOps", "AI/ML", "React", "Next.js", "AWS", "Python", "TypeScript"],
  authors: [{ name: "Ismaeel Shaikh", url: "https://github.com/IsmaeelShaikh" }],
  creator: "Ismaeel Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ismaeelshaikh.com",
    title: "Ismaeel Shaikh | Full-Stack Developer",
    description: "Portfolio of Ismaeel Shaikh, a Full-Stack Developer and Cloud & DevOps Enthusiast. View my projects and experience.",
    siteName: "Ismaeel Shaikh Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ismaeel Shaikh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismaeel Shaikh | Full-Stack Developer",
    description: "Portfolio of Ismaeel Shaikh, a Full-Stack Developer and Cloud & DevOps Enthusiast.",
    creator: "@IsmaeelShaikh",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tv-RrC13mj2gGC38c6l4Z-egXwwejl4YyI-AU5unWDg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-cyber-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
