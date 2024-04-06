/** @format */

import AudioMedia from "@/components/audio/audio";
import AppHeader from "@/components/header/header";
import ThemeRegistry from "@/components/theme-registry/theme.registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppHeader />
          {children}
          <AudioMedia />
        </ThemeRegistry>
      </body>
    </html>
  );
}
