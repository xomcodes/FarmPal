"use client";
import { Inter } from "next/font/google";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import {
  ColorSchemeScript,
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from "@mantine/core";

import { ThemeProvider } from "next-themes";

import Header from "@/layout/header";
import Footer from "@/layout/footer";
import ModalProvider from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

const myColor: MantineColorsTuple = [
  "#e7feed",
  "#d4fade",
  "#a9f2bd",
  "#7beb99",
  "#54e47a",
  "#3ce167",
  "#2edf5c",
  "#1ec54b",
  "#11af41",
  "#009834",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem enableColorScheme>
          <MantineProvider theme={theme}>
            <ModalProvider>
              <main className="flex flex-col min-h-[100vh]">
                <Header />

                {children}

                <Footer />
              </main>
            </ModalProvider>
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
