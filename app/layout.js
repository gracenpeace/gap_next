import Header from "@/components/js/Header";
import Footer from "@/components/js/Footer";
import style from "./globals.css";

export const metadata = {
  title: "은혜와평강교회",
  description: "사랑하고 축복합니다.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
  );
}
