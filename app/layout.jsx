import "./globals.css";
import { site } from "../data/site";

export const metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.heroSubtitle,
  keywords: [
    "property dealer",
    "real estate",
    "construction",
    "plots for sale",
    "home construction",
    site.name,
    site.address.city,
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.heroSubtitle,
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1f3a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
