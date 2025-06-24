import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const intl = useIntl();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4w06v5m',
      'template_45rp3ii',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'mbpJJpiAELqPn3Oii'
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={intl.formatMessage({ id: 'form.name' })}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={intl.formatMessage({ id: 'form.email' })}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder={intl.formatMessage({ id: 'form.message' })}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">
          <FormattedMessage id="form.submit" />
        </button>

        {status === 'success' && <p className="success">{intl.formatMessage({ id: 'form.success' })}</p>}
        {status === 'error' && <p className="error">{intl.formatMessage({ id: 'form.error' })}</p>}
      </form>
    </section>
  );
};

export default Contact;
