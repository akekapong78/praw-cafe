// import { GeistSans } from "geist/font/sans";
import { Mali } from 'next/font/google'
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Praw : Coffee & Bakery",
  description: "The best coffee shop in Narathiwat",
};

const mali = Mali({
  weight: '400',
  subsets: ['latin', 'thai'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mali.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
