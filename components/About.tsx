import styles from "./About.module.css"

export default function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <h2 className="section__title">Sobre Mim</h2>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutData}>
            <p className={styles.aboutDescription}>
              Sou <strong>Cauã Mariano Pestana</strong>, desenvolvedor Front-End apaixonado por tecnologia e design.
              Iniciei meus estudos em programação em 2022, e desde então venho aprimorando minhas habilidades em HTML,
              CSS, JavaScript e React.js, com foco em criar interfaces modernas, funcionais e responsivas.
            </p>

            <p className={styles.aboutDescription}>
              Tenho grande interesse em unir estética e desempenho para proporcionar experiências digitais envolventes e
              intuitivas. Além disso, participei da Olimpíada Brasileira de Informática (OBI), o que reforça meu
              compromisso com o aprendizado contínuo e a busca pela excelência técnica.
            </p>

            <p className={styles.aboutDescription}>
              Meu objetivo profissional é atuar no desenvolvimento de interfaces web criativas, contribuindo com
              projetos que valorizem inovação, qualidade e usabilidade.
            </p>

            <div className={styles.aboutInfo}>
              <div className={styles.aboutBox}>
                <i className="uil uil-award"></i>
                <h3 className={styles.aboutBoxTitle}>Experiência</h3>
                <span className={styles.aboutBoxSubtitle}>2+ Anos</span>
              </div>

              <div className={styles.aboutBox}>
                <i className="uil uil-briefcase-alt"></i>
                <h3 className={styles.aboutBoxTitle}>Projetos</h3>
                <span className={styles.aboutBoxSubtitle}>10+ Completos</span>
              </div>

              <div className={styles.aboutBox}>
                <i className="uil uil-trophy"></i>
                <h3 className={styles.aboutBoxTitle}>OBI</h3>
                <span className={styles.aboutBoxSubtitle}>Participante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
