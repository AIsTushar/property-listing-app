import { Sidebar } from "@/components/dashboard/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
