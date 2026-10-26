import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAANAM Solar Solutions | Aruppukottai",
  description: "VAANAM Solar Solutions, Aruppukottai — rooftop solar solutions for homes and businesses. Request a consultation on WhatsApp.",
  themeColor: "#071b49",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
