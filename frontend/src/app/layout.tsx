import type { Metadata } from "next";
import "./globals.css";
import { TopMenu } from "../components/ui/TopMenu";

export const metadata: Metadata = {
  title: {
    template: "%s | Gapsi",
    default: "Home | Gapsi",
  },
  description: "Examen FullStack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
