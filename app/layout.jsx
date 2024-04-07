import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";
import Footer from "../components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAVI",
  description: "Getting Veterans The Benefits They Deserve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider defaultTheme="black">
        <body>
          <Header />
          <main className="mx-auto p-8">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
