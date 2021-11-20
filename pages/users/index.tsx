import Layout from "../../component/Layout"

// route -> http://127.0.0.1:3000/users

interface UsersProps {
    dataUsers: Array<any>;
}
export default function index(props: UsersProps) {
    const { dataUsers } = props;
    return (
        <Layout pageTitle="User Page">
            {dataUsers.map(user => {
                return (
                    <>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </>
                )
            })}
            <p>Users Page</p>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        }
    }
}
