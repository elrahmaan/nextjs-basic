// route -> http://127.0.0.1:3000/users/data-nya

import { useRouter } from "next/router";

export default function UserDetail() {
    const router = useRouter();
    const { id } = router.query;
    return (
        /* akan menyesuaikan dari data route nya */
        <div>
            <p>
                User Detail Page
                {' '}
                {id}
                {' '}

            </p>
        </div>
    );
}