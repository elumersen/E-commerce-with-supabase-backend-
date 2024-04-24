import { GeistSans } from "geist/font/sans";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

config.autoAddCss = false;
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Vinyl Store",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <CartProvider>
            <ToastContainer autoClose={2500} position="top-right" />
            <Header />
            {children}
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
