import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Nam Anh | Nhập khẩu chính ngạch & Logistics",description:"Giải pháp nhập khẩu chính ngạch Trung Quốc, khai báo hải quan và logistics trọn gói cho doanh nghiệp.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="vi"><body>{children}</body></html>}

