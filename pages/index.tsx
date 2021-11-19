import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']}>Welcome elrahmaan</h1>
      <Footer />
    </>
  );
}
