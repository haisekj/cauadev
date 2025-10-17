"use client"

import type React from "react"

import { useState } from "react"
import styles from "./Contact.module.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Mensagem enviada com sucesso!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Erro ao enviar mensagem. Tente novamente.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Erro ao enviar mensagem. Tente novamente.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <h2 className="section__title">Contato</h2>

        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>Vamos trabalhar juntos!</h3>
            <p className={styles.contactDescription}>
              Estou sempre aberto a novos projetos e oportunidades. Entre em contato comigo através do formulário ou
              pelas redes sociais.
            </p>

            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <i className="uil uil-envelope"></i>
                <h4>Email</h4>
                <span>cauapestana74@gmail.com</span>
              </div>

              <div className={styles.contactCard}>
                <i className="uil uil-whatsapp"></i>
                <h4>WhatsApp</h4>
                <span>+55 (19) 98312-3755</span>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.contactFormGroup}>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                className={styles.contactInput}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.contactFormGroup}>
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                className={styles.contactInput}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.contactFormGroup}>
              <textarea
                name="message"
                placeholder="Sua mensagem"
                className={styles.contactInput}
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="button">
              Enviar Mensagem <i className="uil uil-message"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
