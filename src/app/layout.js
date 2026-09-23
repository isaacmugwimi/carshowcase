import { Footer, Navbar } from "@/components/Index";
import "./globals.css";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}