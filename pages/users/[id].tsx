// route -> http://127.0.0.1:3000/users/data-nya

import Layout from "../../component/Layout";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}
interface UserDetailProps {
    user: User;
}
export default function UserDetail(props: UserDetailProps) {
    const { user } = props;
    return (
        /* akan menyesuaikan dari data route nya */
        <Layout pageTitle="User Detail">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`,
        },
    }));
    return {
        paths,
        fallback: true,
    };
}

interface GetStaticProps {
    params: {
        id: string;
    }
}
export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const user = await res.json();
    return {
        props: {
            user,
        }
    }
}