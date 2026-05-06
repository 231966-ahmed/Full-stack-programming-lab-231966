import "./globals.css";

export const metadata = {
  title: "Ecommerce App",
  description: "Basic ecommerce app with Next.js and Express API"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
