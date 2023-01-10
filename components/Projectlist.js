import Loader from "./Loader";
import styles from "./Projectlist.module.css";
import ProjectlistItem from "./ProjectlistItem";

function Projectlist({ projects }) {
  return (
    <section className={styles.projectlist}>
      <h1>Work</h1>
      <hr />
      {projects.map((item, index) => {
        return <ProjectlistItem data={item} key={item._id} index={index} />;
      })}
    </section>
  );
}

export default Projectlist;
