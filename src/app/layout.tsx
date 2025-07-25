import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Fergeh - AI Learning in Kurdish & Arabic",
  description:
    "The first AI learning app in Kurdistan and Iraq. Upload images or YouTube links and get flashcards, guides, summaries, and quizzes in Kurdish (Badini & Sorani) and Arabic. Perfect for 12th grade, university students, and college entrance exams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
