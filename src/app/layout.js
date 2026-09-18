import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "My website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}