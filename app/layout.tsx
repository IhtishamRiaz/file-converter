import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

export const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
});

export const metadata: Metadata = {
   title: "ConvertEase",
   description:
      "ConvertEase - Effortlessly transform your files with our free online file converter. Convert documents, images, videos, and more in seconds. Seamlessly switch between formats with ease and speed. Experience the simplicity of file conversion at your fingertips. Try ConvertEase now!",
   creator: "Muhammad Ihtisham",
   keywords:
      "image converter, video converter, free converter, unlimited image converter, audio converter",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body
            className={cn(
               "min-h-screen bg-background font-sans antialiased",
               fontSans.variable
            )}
         >
            <Navbar />
            <main className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
               {children}
            </main>
         </body>
      </html>
   );
}
