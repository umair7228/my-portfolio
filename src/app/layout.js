import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "./components/FireFliesBackground";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"],
  variable: "--font-inter"
 });

export const metadata = {
  title: "Umair Portfolio",
  description: "Created by Umair",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
        sizes: '32x32'
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, 'bg-background relative -z-20 text-foreground font-inter')}>
        <Navigation  />
        {children}
        <FireFliesBackground />
      </body>
    </html>
  );
}
