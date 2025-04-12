import '@/styles/globals.css';

import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className='bg-gray-300'
      lang='en'
    >
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
