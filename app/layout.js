import { Poppins } from "next/font/google";
import { AuthSessionProvider } from "@/providers/SessionProvider";
import "./globals.css";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sylph: Elevate Your Playlist",
  description: `Sylph: Your Gateway to Effortless Music
Sylph is more than just a music player—it’s a seamless, intuitive experience designed to elevate your listening journey. Whether you’re curating the perfect playlist, discovering new tracks, or simply unwinding to your favorite tunes, Sylph brings your music to life with elegance and ease.

With its lightweight design and smooth performance, Sylph feels as airy and effortless as its name suggests. Dive into a world of crystal-clear sound, personalized recommendations, and a user-friendly interface that puts you in control.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AuthSessionProvider>
          <div className="w-full min-h-screen flex">{children}</div>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
