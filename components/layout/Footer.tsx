// components/Footer.tsx — L99 Premium Redesign
import styles from '../homepage/CTA.module.css'
import Link from 'next/link';


export default function Footer() {
    return (
        <div >
            <div className={styles.governanceBar}>
                <p>
                    SNL Services operates benefiting from the parent company&apos;s
                    governance standards, strategic oversight, and long&#8209;term growth
                    vision. This structure ensures stability, credibility, and readiness
                    for enterprise and global engagements.
                </p>
            </div>

            {/* ── Footer ── */}
            <footer className={styles.footer}>
                <div className={styles.footerInner}>
                    <div className={styles.copyright}>
                        © 2026 SNL Services Limited. All rights reserved.
                    </div>

                    <nav className={styles.footerLinks} aria-label="Footer">
                        <Link href="/privacy">Privacy</Link>
                        <span aria-hidden="true">·</span>
                        <Link href="/terms">Terms</Link>
                        <span aria-hidden="true">·</span>
                        <Link href="/contact-us">Contact</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}