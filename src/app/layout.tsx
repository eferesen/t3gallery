import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "T3 Gallery",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className='flex w-full items-center justify-between p4 text-xl font-semibold'>
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='e'>
      <body className={`${GeistSans.variable} flex flex-col gap-4`}>
      <TopNav />
        {children}
      </body>
    </html>
  );
}
