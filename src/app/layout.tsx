import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AutoPlayAudio from "@/components/AutoPlayAudio";


const Fluent = localFont({
  src: "./fonts/Fluent-SemiBold-BF66ff4fd9d7f8d.ttf",
  variable: "--font-fluent",
  weight: "100 900",
});

const Peri = localFont({
  src: "./fonts/Peristiwa.otf",
  variable: "--font-peri",
  weight: "100 900",

})

export const metadata: Metadata = {
  title: "NC Freshers",
  description: "A grand welcome to the freshers of NC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Fluent.variable} ${Peri.variable} antialiased`}
      >
        {children}
        <AutoPlayAudio />
      </body>
    </html>
  );
}
