import React, { useState } from 'react';
import imgIcon from '../assets/2707989.png';
import linkedinIcon from '../assets/3670129.png';
import emailIcon from '../assets/552486.png';
import whatAppIcon from '../assets/3670133.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to connect to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="wrap contact-panel">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Let's talk about it and turn it into something real.</p>
          <div className="contact-info">
            <div>📍 Faisalabad, Pakistan</div>
            <div>✉️ atifshahwaiz023@gmail.com</div>
            <div>📞 03207094690</div>
          </div>
          <div className="socials">
            <a href="https://github.com/atifshahwaiz023-dev" aria-label="GitHub" target="_blank" rel="noreferrer">
              <img src={imgIcon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/atiff-shahwaiz-7728632b1/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="" />
            </a>
            <a href="mailto:atifshahwaiz023@gmail.com" aria-label="Email">
              <img src={emailIcon} alt="Email" />
            </a>
            <a href="https://wa.me/923207094690" aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <img src={whatAppIcon} alt="" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field-row two">
            <div>
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="field-row">
            <div>
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="How can I help you?" value={formData.subject} onChange={handleChange} />
            </div>
          </div>
          <div className="field-row">
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message here..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
          </div>
          <button type="submit" className="btn send-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p style={{ marginTop: '10px', color: 'var(--violet-2)', fontSize: '0.9rem' }}>{status}</p>}
        </form>
      </div>
    </section>
  );
}