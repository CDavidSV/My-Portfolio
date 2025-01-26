import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DataProvider } from "@/components/data";

export const metadata: Metadata = {
  title: "Carlos David Sandoval Vargas",
  description: "Carlos David Sandoval Vargas' portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <DataProvider>
            {children}
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
