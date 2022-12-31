import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import styles from "./Projectlist.module.css";
import ProjectlistItem from "./ProjectlistItem";

function Projectlist() {
  const [projects, setProjects] = useState([{ title: "y" }]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get Projectdata from Backend

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      {projects.map((project) => {
        return <ProjectlistItem project={project} />;
      })}
    </section>
  );
}

export default Projectlist;
