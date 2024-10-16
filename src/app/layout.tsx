import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "Components";
import { CartProvider, SearchProvider, BrandProvider } from "Context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gulf Youth Bicycle",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <SearchProvider>
          <BrandProvider>
            <CartProvider>
              <Header />
              {children}
              <Footer />
            </CartProvider>
          </BrandProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
