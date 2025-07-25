import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fergeh - AI Learning in Kurdish & Arabic",
  description: "The first AI learning app in Kurdistan and Iraq. Upload images or YouTube links and get flashcards, guides, summaries, and quizzes in Kurdish (Badini & Sorani) and Arabic. Perfect for 12th grade, university students, and college entrance exams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody className={spaceGrotesk.className}>
        {children}
      </ClientBody>
    </html>
  );
}
