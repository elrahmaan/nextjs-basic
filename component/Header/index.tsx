import Link from 'next/link';
import styles from "../Header/Header.module.css";
export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
                <li className={styles.item}><Link href="/blog"><a>Blog</a></Link></li>

                {/* tanpa component Link (masih terdapat redirect/reload page) */}
                <li className={styles.item}><a href="/users">Users</a></li>
            </ul>


        </header>
    )
}
