import styles from "./CurriculumVitae.module.css";

function CurriculumVitae({ infos }) {
  const { curriculumVitae } = infos;

  if (!curriculumVitae) {
    return;
  }

  if (curriculumVitae.length === 0) {
    return;
  }

  return (
    <section id="curriculumVitae" className={styles.curriculumVitae}>
      <h1>Biography</h1>
      <section className={styles.listWrapper}>
        {curriculumVitae.map((list) => {
          const { _key, listTitle, listItems } = list;
          return (
            <article key={_key} className={styles.list}>
              <h3>{listTitle}</h3>
              <section>
                {listItems.map((listItem) => {
                  const { _key, year, content } = listItem;
                  return (
                    <div key={_key} className={styles.listItem}>
                      <div>{year}</div>
                      <div>{content}</div>
                    </div>
                  );
                })}
              </section>
            </article>
          );
        })}
      </section>
    </section>
  );
}

export default CurriculumVitae;
