import React, { useState } from 'react'
import Head from 'next/head'
import Toast from '@/components/Toast'
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.includes('@');
  };

  const validatePhone = (phone) => {
    // Must start with + followed by country code and digits (no spaces allowed)
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Client-side validation
    if (!validateEmail(email)) {
      setToastMessage('Please enter a valid email address with @ symbol.');
      setToastType('error');
      setShowToast(true);
      setIsSubmitting(false);
      return;
    }

    if (phone && !validatePhone(phone)) {
      setToastMessage('Phone number must start with + followed by country code (e.g., +1234567890). No spaces allowed.');
      setToastType('error');
      setShowToast(true);
      setIsSubmitting(false);
      return;
    }

    const data = { phone, name, email, desc };
    
    try {
      const response = await fetch('/api/postcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitStatus('success');
        setPhone('');
        setName('');
        setDesc('');
        setEmail('');
        setToastMessage(result.message || 'Thank you! Your message has been sent successfully.');
        setToastType('success');
        setShowToast(true);
      } else {
        setSubmitStatus('error');
        setToastMessage(result.error || 'Failed to send message. Please try again.');
        setToastType('error');
        setShowToast(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setToastMessage('Network error. Please check your connection and try again.');
      setToastType('error');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'desc':
        setDesc(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us - Creator Circle</title>
        <meta name="description" content="Get in touch with Creator Circle. We'd love to hear from you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.description}>
            Have a question, feedback, or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Your Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={handleChange} 
              className={styles.input}
              id="name" 
              name="name"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={handleChange} 
              className={styles.input}
              id="email" 
              name="email"
              required
              placeholder="your.email@example.com"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Please enter a valid email address with @ symbol"
            />
            <div className={styles.helpText}>Must contain @ symbol. We'll never share your email with anyone else.</div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number (Optional)</label>
            <input 
              type="tel" 
              value={phone} 
              onChange={handleChange} 
              className={styles.input}
              name="phone" 
              id="phone"
              placeholder="+1234567890"
              pattern="^\+[1-9]\d{1,14}$"
              title="Must start with + followed by country code and digits (no spaces). Example: +1234567890"
            />
            <div className={styles.helpText}>Must start with + followed by country code. No spaces allowed. Example: +1234567890</div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="desc" className={styles.label}>Your Message</label>
            <textarea 
              value={desc} 
              name="desc" 
              onChange={handleChange} 
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Tell us about your project, question, or how we can help you..."
              id="desc"
              required
            />
          </div>

          <button 
            type="submit" 
            className={`${styles.submitBtn} ${isSubmitting ? styles.loading : ''} ${submitStatus === 'success' ? styles.success : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? '' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>


        </form>

        <div className={styles.contactInfo}>
          <h3 className={styles.contactInfoTitle}>Other Ways to Reach Us</h3>
          <p className={styles.contactInfoText}>
            You can also reach out to us directly at{' '}
            <a href="mailto:support@huntingcoder.dev" className={styles.email}>
              support@huntingcoder.dev
            </a>
            {' '}for any inquiries, collaborations, or technical support.
          </p>
        </div>
      </div>
      
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}

export default Contact
