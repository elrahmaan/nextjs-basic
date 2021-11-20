import Layout from "../component/Layout"

// route -> http://127.0.0.1:3000/blog
export default function blog() {
    return (
        <Layout pageTitle="Blog Page">
            <p className="title">Blog Page</p>
        </Layout>
    )
}
