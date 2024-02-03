import { Box, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Post-list",
  description: "Post listing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background: '#333'}}>
        <ThemeProvider theme={theme}>
          <Box component="main" sx={{
            flexGrow: 1,
          }}>
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
