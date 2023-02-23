import Link from "next/link";
import styles from "../../styles/Ninjas.module.scss";
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { ninjas: data },
  };
}
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninja</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <p className={styles.single}>
            <b>{ninja.name}</b> - <i>{ninja.email}</i>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
