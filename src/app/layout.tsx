import type { Metadata } from "next";
import "./globals.css";
import { openSans, laila } from "@/fonts/fonts";
import { Suspense } from "react";
import Loading from "@/components/Others/Loading";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Event Tap",
  description: "Event Tap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css"/>
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css"/>
      </head>
      <body
        className={`${openSans.variable} ${laila.variable}`}
         cz-shortcut-listen="true"
      >
        <Toaster position="top-center" expand={true} richColors />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
