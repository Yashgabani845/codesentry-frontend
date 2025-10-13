import "./globals.css";
// src/app/layout.js

import { DM_Sans } from 'next/font/google';
import './globals.css';

// Configure the font
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the font class to the body */}
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
export const metadata = {
  title: "CodeSentry - Practice, Learn & Master Coding Skills",
  description: "CodeSentry is a platform to practice coding, prepare for interviews, and improve your problem-solving skills with challenges, tutorials, and assessments.",
  keywords: [
    "coding practice",
    "DSA problems",
    "interview preparation",
    "online coding platform",
    "algorithm challenges",
    "programming tutorials",
  ],
  authors: [{ name: "Yash Gabani" }],
  creator: "Yash Gabani",
  applicationName: "CodeSentry",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1565c0",
 
};

