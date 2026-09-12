import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { WishlistDrawer } from "@/components/wishlist/WishlistDrawer";
import { SearchDrawer } from "@/components/layout/SearchDrawer";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neva | فروشگاه مدرن",
    template: "%s | Neva",
  },
  description:
    "Neva یک فروشگاه آنلاین مدرن برای تجربه‌ای ساده، سریع و لذت‌بخش در خرید است.",
  keywords: [
    "Neva",
    "نِوا",
    "فروشگاه آنلاین",
    "فروشگاه اینترنتی",
    "خرید آنلاین",
    "خرید اینترنتی",
  ],
  authors: [{ name: "Neva" }],
  creator: "Neva",
  publisher: "Neva",
  applicationName: "Neva",
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neva | فروشگاه مدرن",
    description: "تجربه‌ای مدرن، ساده و لذت‌بخش برای خرید آنلاین.",
    url: "/",
    siteName: "Neva",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neva | فروشگاه مدرن",
    description: "تجربه‌ای مدرن، ساده و لذت‌بخش برای خرید آنلاین.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#315c4c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.variable} antialiased`}>
        <div className="min-h-screen">
          <Header />

          <main>{children}</main>

          <Footer />

          <MobileNavigation />

          <CartDrawer />
          <WishlistDrawer />
          <SearchDrawer />
        </div>
      </body>
    </html>
  );
}
