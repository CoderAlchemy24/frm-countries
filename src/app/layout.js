import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ['300', '400', '700', '800']
});


export const metadata = {
  title: "Countries",
  description: "NextJS app listing countries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        <div className="min-h-screen space-y-6 bg-[#FCFCFC] dark:bg-[#2B3844]">
          <header className="flex justify-between items-center h-[80px] border-b border-gray-200 bg-white px-8 py-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900">
            <h1 className="font-extrabold text-2xl ">Where in the world?</h1>
           
          </header>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
