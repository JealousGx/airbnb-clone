import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/Modals/RegisterModal";
import LoginModal from "./components/Modals/LoginModal";
import RentModal from "./components/Modals/RentModal";
import ToasterProvider from "./providers/ToasterProvider";
import { getCurrentUser } from "./actions/getCurrentUser";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <ClientOnly>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <RegisterModal />
        <RentModal />
        <LoginModal />
      </ClientOnly>
      <body className={font.className}>{children}</body>
    </html>
  );
}
