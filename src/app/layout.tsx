import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="text-red-200; bg-gray-800 text-2xl">
        <main className=" flex min-h-[40rem] w-screen flex-col items-center text-gray-50 sm:h-screen  ">
          {children}
        </main>
      </body>
    </html>
  );
}
