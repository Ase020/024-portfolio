import { Inter } from "next/font/google";

import "./globals.css";
import { TransitionProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Felix Nyalenda Olali",
  description: "Welcome to my Digital world.",
  icons: {
    icon: [
      {
        url: "images/favicon.png",
        href: "images/favicon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
