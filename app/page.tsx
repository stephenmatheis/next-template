import type { Metadata } from 'next';
import { Page } from '@/components/page';

export const metadata: Metadata = {
    title: 'Root Route',
    description: 'This is the root route page description.',
};

export default function RootPage() {
    return (
        <Page>
            <h1>Root Route</h1>
        </Page>
    );
}
