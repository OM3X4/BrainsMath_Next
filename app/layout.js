import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BrainsMath - Learn Mental Math Faster and Smarter",
  description: "Master mental math with BrainsMath. Learn quick calculation tricks and practice solving problems efficiently. Free for everyone!",
  keywords: [
    "mental math",
    "math tricks",
    "free math learning",
    "math practice",
    "learn math fast",
    "speed math",
    "brain training",
    "math exercises"
  ],
  authors: [{ name: "BrainsMath Team" }],
  robots: "index, follow",
  openGraph: {
    title: "BrainsMath - Learn Mental Math Faster and Smarter",
    description: "Master mental math with BrainsMath. Learn quick calculation tricks and practice solving problems efficiently. Free for everyone!",
    type: "website",
    url: "https://www.brainsmath.com",
    images: [{
      url: "/og-image.png", // Replace with actual image URL
      width: 1200,
      height: 630,
      alt: "BrainsMath - Master Mental Math",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainsMath - Learn Mental Math",
    description: "Get faster at math with BrainsMath. Free lessons and practice for improving mental math skills!",
    images: ["/twitter-image.png"], // Replace with actual image URL
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="FOpOxcY4cdYAblOfATnThANqE6F9SeY1NSiaV2yNxkI" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}