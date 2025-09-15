import React, { useState } from 'react'
import styles from './Reservation.module.css'
import chefImg from '../../img/story.jpg'

export default function Reservation() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    date: '',
    guests: '1-2',
    message: '',
    newsletter: false
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    alert('Reservation submitted!')
  }

  return (
    <section id='reservation' className={styles.reservation}>
      <h1 className={styles.title}>Reservation</h1>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Primeiro nome*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Viana"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>Último nome*</label>
              <input
                type="text"
                name="lastName"
                placeholder="Concept"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.field}>
            <label>Telemóvel*</label>
            <input
              type="tel"
              name="phone"
              placeholder="XXXXXX"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Data*</label>
              <input
                type="datetime-local"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>Número de Pessoas*</label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                required
              >
                <option value="1-2">1–2 Seats</option>
                <option value="3-4">3–4 Seats</option>
                <option value="5+">5+ Seats</option>
              </select>
            </div>
          </div>
          <div className={styles.field}>
            <label>Mensagem*</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.newsletter}>
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
            />
            <label>Subscreva-se para receber nossa newsletter</label>
          </div>
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
        <div className={styles.imageWrapper}>
          <img src={chefImg} alt="Chef at work" />
        </div>
      </div>
    </section>
  )
}
