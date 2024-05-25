import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Gapsi",
    default: "Home | Gapsi",
  },
  description: "Examen FullStack",
};

export default function SupplierLayout({
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
