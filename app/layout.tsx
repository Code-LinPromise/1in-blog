import "./globals.css";
import "../style/var.scss";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" id="dark">
      <body className={styles.body}>
        <div>
          <span>首页</span>
        </div>
        {children}
      </body>
    </html>
  );
}
