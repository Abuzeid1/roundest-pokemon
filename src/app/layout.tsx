import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="text-red-200; bg-gray-800 text-2xl">
        <main className="flex min-h-screen w-screen flex-col items-center text-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
