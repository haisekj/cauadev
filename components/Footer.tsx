import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerSocial}>
          <a href="https://github.com/haisekj" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/caua-pestana-857b99379" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://www.instagram.com/haisekjkk" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <p className={styles.footerCopy}>&copy; 2025 Cauã Pestana. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
