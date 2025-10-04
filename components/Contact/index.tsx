'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

      try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          const data = await response.json();

          if (data.success) {
              setSubmitSuccess(true);
              setFormData({ name: '', email: '', subject: '', message: '' });
              setTimeout(() => setSubmitSuccess(false), 5000);
          } else {
              setSubmitError(data.message);
          }
      } catch (error) {
          setSubmitError('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      } finally {
          setIsSubmitting(false);
      }

      setTimeout(() => {
          setSubmitSuccess(false);
      }, 5000);
  };
  
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Ponte en contacto</h2>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Información de contacto</h3>
            <p>No dudes en comunicarte conmigo si estás buscando un desarrollador, tienes alguna pregunta o simplemente quieres ponerte en contacto.</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Correo</h4>
                  <a href="mailto:rhbon.08@gmail.com">rhbon.08@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Teléfono</h4>
                  <a href="tel:+573203179003">+57 (320) 317-9003</a>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/r0odrigo-bonilla/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/r0odr1" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <div className={styles.formHeader}>
              <h3 className={styles.tooltipTrigger}>
                Envíame un mensaje
                <span className={styles.tooltip}>
                  Tu mensaje se enviará directamente a mi correo. ¡Te responderé lo antes posible!
                </span>
              </h3>
            </div>
            
            {submitSuccess && (
              <div className={styles.formSuccess}>
                ¡Gracias! Tu mensaje se ha enviado correctamente.
              </div>
            )}
            
            {submitError && (
              <div className={styles.formError}>
                {submitError}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Tu nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Introduce tu nombre"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Tu correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Introduce tu correo electrónico"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ingresa el asunto"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Tu mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Introduce tu mensaje"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;