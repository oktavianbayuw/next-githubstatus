import "./globals.css";

export const metadata = {
  title: 'GitHub Status Dashboard',
  description: 'Dashboard untuk memeriksa status API GitHub',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-slate-800">
        {children}
      </body>
    </html>
  );
}
