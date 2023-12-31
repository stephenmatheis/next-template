import styles from './footer.module.scss';

export function Footer() {
    const copyright = `Copyright (C) ${new Date().getFullYear()} App`;

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>{copyright}</div>
        </footer>
    );
}
