import "./globals.css";

export const metadata = {
  title: "myInvois",
  description: "Invoice and receipt generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
