import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dispatcch Logistics",
  description: "Logistics Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f5f7fb] text-[#111827]">

        {/* ONE SIMPLE HEADER */}
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">

          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

            {/* LOGO */}
            <a
              href="/"
              className="flex items-center gap-2"
            >
              <img
                src="/image/dispatcch_logo.png"
                alt="Dispatcch"
                className="h-10 w-10 object-contain"
              />

              <div>
                <div className="text-lg font-extrabold">
                  DISPATCCH
                </div>

                <div className="text-[8px] tracking-[0.25em] text-gray-500">
                  LOGISTICS
                </div>
              </div>
            </a>

            {/* PROFILE */}
            <a
              href="/profile"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold hover:bg-gray-50"
            >
              Profile
            </a>

          </div>

        </header>

        {/* PAGE CONTENT */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}