// app/layout.js
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Provider from './provider';

export const metadata = {
  title: 'Next.js Project',
  description: 'Testing Provider and Header components',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
