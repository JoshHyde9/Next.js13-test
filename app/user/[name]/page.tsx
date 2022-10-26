import styles from "../../page.module.css";

const User = async ({ params }: { params: { name: string } }) => {
  const response = await fetch(`https://api.github.com/users/${params.name}`);
  const githubProfile = await response.json();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{githubProfile.name}</h1>

        <p className={styles.description}>
          has {githubProfile.followers} followers
        </p>
      </main>
    </div>
  );
};

export default User;
