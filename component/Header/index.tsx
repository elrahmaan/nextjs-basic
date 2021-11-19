import Link from 'next/link';
export default function Header() {
    return (
        <header>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>

                {/* tanpa component Link (masih terdapat redirect/reload page) */}
                <li><a href="/users">Users</a></li>
            </ul>


        </header>
    )
}
