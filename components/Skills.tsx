import styles from "./Skills.module.css"

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90, icon: "uil-html5" },
    { name: "CSS", level: 85, icon: "uil-css3-simple" },
    { name: "JavaScript", level: 80, icon: "uil-java-script" },
    { name: "React", level: 75, icon: "uil-react" },
    { name: "C++", level: 70, icon: "uil-brackets-curly" },
    { name: "Lua", level: 65, icon: "uil-moon" },
  ]

  return (
    <section className={`${styles.skills} section`} id="skills">
      <div className="container">
        <h2 className="section__title">Habilidades</h2>

        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillsCard}>
              <div className={styles.skillsHeader}>
                <i className={`uil ${skill.icon} ${styles.skillsIcon}`}></i>
                <h3 className={styles.skillsTitle}>{skill.name}</h3>
              </div>

              <div className={styles.skillsBar}>
                <div className={styles.skillsPercentage} style={{ width: `${skill.level}%` }}>
                  <span className={styles.skillsNumber}>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
