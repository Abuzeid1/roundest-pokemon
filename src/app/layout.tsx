import Link from "next/link";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="text-red-200; bg-gray-800 text-2xl">
        <main className=" flex min-h-[40rem] w-screen flex-col items-center text-gray-50 sm:h-screen  ">
         
          {children}
          <Link className="mt-auto pb-7 max-sm:pt-16" href="/results">
            Results
          </Link>
        </main>
      </body>
    </html>
  );
}
