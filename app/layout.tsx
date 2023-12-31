import type { Metadata } from 'next';
import '@/styles/styles.scss';

export const metadata: Metadata = {
    title: {
        template: 'App | %s',
        default: 'App',
    },
    description: 'My app description.',
    viewport: 'width=device-width, initial-scale=1,  viewport-fit=cover',
    icons: {
        shortcut: '/favicon.ico',
        icon: '/favicons/icon.png',
        apple: '/favicons/apple-icon.png',
    },
    manifest: '/manifest.json',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
