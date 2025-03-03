import "./globals.css";
import "@/stylesheets/var.scss";
import  "@/stylesheets/reset.scss"
import styles from "./layout.module.scss";
import LayoutTab from "@/components/LayoutTab";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" id="dark">
      <body className={styles.body}>
        <div className={styles.layout}>
            <LayoutTab/>
        </div>
        {children}
      </body>
    </html>
  );
}
