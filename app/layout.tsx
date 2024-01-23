import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import ReduxProvider from './lib/Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <Provider store={store}>{children}</Provider> */}
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
