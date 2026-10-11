import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Abdullah Hossien | AI/ML Researcher & Engineer",
  description:
    "Portfolio of Md Abdullah Hossien — AI/ML Researcher & Full-Stack Developer. Published author at HCII 2026 (Springer) & IEEE, aspiring Master's student in Computer Science / AI, and creator of MindWaveWeb, GloHealth AI, StreetVendor, and Ababil's Attire.",
  keywords: [
    "Abdullah Hossien",
    "Md Abdullah Hossien Molla",
    "itzabd",
    "AI Researcher",
    "Machine Learning Engineer",
    "Master's Applicant",
    "Healthcare AI",
    "EEG Analysis",
    "Full-Stack Developer",
    "Independent University Bangladesh",
    "Portfolio",
  ],
  authors: [{ name: "Md Abdullah Hossien", url: "https://github.com/itzabd" }],
  openGraph: {
    title: "Md Abdullah Hossien | AI/ML Researcher & Engineer",
    description:
      "Bridging machine learning research in healthcare & neurotechnology with production software engineering.",
    url: "https://itzabd.github.io",
    siteName: "Abdullah Hossien Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Abdullah Hossien | AI/ML Researcher & Engineer",
    description:
      "Published researcher (Springer LNCS, IEEE) & full-stack developer from Bangladesh.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (var registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <div className="ambient-glow" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
