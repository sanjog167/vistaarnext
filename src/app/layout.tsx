import Header from "@/components/Header/Header";
import NextAuthProvider from "@/providers/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "Nepal's First Online B2B Marketplace",
  description: "Vistaar Trade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <header>
            <Header />
          </header>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
