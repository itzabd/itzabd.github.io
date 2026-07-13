import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Hossien | AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Abdullah Hossien — AI/ML engineer, full-stack developer, and neurotechnology researcher from Bangladesh. Creator of MindWaveWeb, GloHealth AI, StreetVendor, and more.",
  keywords: [
    "Abdullah Hossien",
    "itzabd",
    "AI Engineer",
    "ML Engineer",
    "Full-Stack Developer",
    "EEG Analysis",
    "LLM",
    "React",
    "Next.js",
    "Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Abdullah Hossien", url: "https://github.com/itzabd" }],
  openGraph: {
    title: "Abdullah Hossien | AI/ML Engineer & Full-Stack Developer",
    description:
      "Pioneering AI/ML applications at the intersection of neuroscience and language models. Explore projects, research, and more.",
    url: "https://itzabd.github.io",
    siteName: "Abdullah Hossien Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Hossien | AI/ML Engineer",
    description: "Pioneering AI/ML applications — EEG × LLM researcher, full-stack developer.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Aurora background blobs */}
        <div className="aurora-bg" aria-hidden="true">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
          <div className="aurora-blob aurora-blob-4" />
        </div>
        {children}
      </body>
    </html>
  );
}
