import { ReactNode } from 'react';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { Footer } from '@/components/footer';
import styles from './page.module.scss';

type PageProps = {
    children?: ReactNode;
    noFooter?: boolean;
    noHeader?: boolean;
};

export function Page({ children, noFooter, noHeader }: PageProps) {
    return (
        <div className={styles.page}>
            {!noHeader && <Header />}
            <Main>{children}</Main>
            {!noFooter && <Footer />}
        </div>
    );
}
