"use client"

import { useEffect, useState } from "react"
import styles from "./Home.module.css"

export default function Home() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = ["Front-End Developer", "Web Designer"] 

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      setDisplayText(
        isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1),
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, titles])

  return (
    <section className={`${styles.home} section`} id="home">
      <div className={`${styles.homeContainer} container`}>
        <div className={styles.homeContent}>
          <div className={styles.homeData}>
            <h1 className={styles.homeTitle}>Olá, eu sou Cauã Pestana</h1>
            <h3 className={styles.homeSubtitle}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </h3>
            <p className={styles.homeDescription}>
              O Front-End é a arte de unir lógica e design....
              <br />
              Sou um desenvolvedor dedicado a criar interfaces simples, elegantes e eficientes, com foco em experiências
              que encantam e inspiram.
            </p>
            <div className={styles.homeButtons}>
              <a href="#contact" className="button">
                Contate-me <i className="uil uil-message"></i>
              </a>
              <a href="/cv.pdf" download className={`button ${styles.buttonSecondary}`}>
                Download CV <i className="uil uil-download-alt"></i>
              </a>
            </div>
          </div>

          <div className={styles.homeImg}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/olho-8OQqJvDxdA1ZWqHJBrCbtSOBzSij5d.jpg"
              alt="Cauã Mariano Pestana"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
