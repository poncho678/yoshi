import Loader from "./Loader";
import styles from "./Projectlist.module.css";
import ProjectlistItem from "./ProjectlistItem";

function Projectlist({ projects }) {
  return (
    <section>
      <h1>Work</h1>
      <hr />
      {projects.map((item) => {
        return (
          <div key={item._id}>
            <ProjectlistItem data={item} />
          </div>
        );
      })}
    </section>
  );
}

export default Projectlist;
