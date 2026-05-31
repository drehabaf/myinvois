import "./globals.css";

export const metadata = {
  title: "myInvois",
  description: "Invoice dan resit generator untuk Pusat Kesihatan Drehab AF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
