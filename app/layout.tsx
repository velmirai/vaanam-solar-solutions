import type { Metadata, Viewport } from "next";
import "./globals.css";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  title: "VAANAM Solar Solutions | Aruppukottai",
  description: "VAANAM Solar Solutions, Aruppukottai — rooftop solar solutions for homes and businesses. Request a consultation on WhatsApp.",
  ...(googleSiteVerification && {
    verification: {
      google: googleSiteVerification,
    },
  }),
};

export const viewport: Viewport = {
  themeColor: "#071b49",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
