import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FemmeBiz — The Female Boxing Platform",
  description: "The professional platform for upcoming and elite female boxers. Track fight records, climb the global rankings, and build your legacy in women's boxing.",
  keywords: "female boxing, women boxing, fight records, boxing rankings, female boxer platform",
  openGraph: {
    title: "FemmeBiz — The Female Boxing Platform",
    description: "The professional platform for upcoming and elite female boxers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
