import styles from "./Projects.module.css"

export default function Projects() {
  const projects = [
    {
      title: "Landing Page Moderna",
      description: "Landing page responsiva com animações suaves",
      image: "/modern-landing-page.png",
      link: "#",
      tags: ["React", "CSS", "Responsive"],
    },
    {
      title: "Dashboard Interativo",
      description: "Dashboard com gráficos e visualização de dados",
      image: "/modern-dashboard-ui.png",
      link: "#",
      tags: ["React", "Charts", "UI/UX"],
    },
    {
      title: "E-commerce UI",
      description: "Interface de loja virtual com carrinho de compras",
      image: "/ecommerce-website-design.png",
      link: "#",
      tags: ["React", "E-commerce", "API"],
    },
    {
      title: "App de Tarefas",
      description: "Aplicativo de gerenciamento de tarefas em React",
      image: "/task-management-app-interface.png",
      link: "#",
      tags: ["React", "CRUD", "LocalStorage"],
    },
    {
      title: "Portfólio Criativo",
      description: "Site portfólio com design único e animações",
      image: "/creative-portfolio-website.png",
      link: "#",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Blog Pessoal",
      description: "Blog com sistema de posts e comentários muito legal para fazer amizades",
      image: "/personal-blog-design.jpg",
      link: "#",
      tags: ["React", "Blog", "CMS"],
    },
  ]

  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className="container">
        <h2 className="section__title">Projetos</h2>

        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImg}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <i className="uil uil-eye"></i>
                </div>
              </div>

              <div className={styles.projectData}>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <a href={project.link} className={styles.projectButton}>
                  <span>Ver Projeto</span>
                  <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
