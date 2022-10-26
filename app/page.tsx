import styles from "./page.module.css";

const Home = async () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>
      </main>
    </div>
  );
};

export default Home;
