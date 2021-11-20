import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404() {
    // melakukan auto redirect ke halaman home setelah 2 detik
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000)
    }, [])
    return (
        <div>
            <h1 className="title-not-found">Oops..!</h1>
            <h1 className="title-not-found">Halaman yang anda cari tidak ditemukan</h1>
        </div>
    )
}
