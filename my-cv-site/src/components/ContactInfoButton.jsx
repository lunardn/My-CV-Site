import React, { useState } from 'react';

const ContactInfoButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="contact-info-button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
      aria-label="Afficher mes coordonnées"
    >
      <button>📞 Mes coordonnées</button>

      {hover && (
        <div
          className="tooltip"
          style={{
            position: 'absolute',
            bottom: '125%',
            left: '50%',
            transform: 'translateX(-70%)',
            padding: '8px 12px',
            borderRadius: '6px',
            backgroundColor: '#333',
            color: '#fff',
            whiteSpace: 'nowrap',
            boxShadow: '0 0 8px rgba(0,0,0,0.3)',
            zIndex: 10,
            fontSize: '0.9rem',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div><strong>Email:</strong> luna.rondineau@gmail.com</div>
          <div><strong>Téléphone:</strong> +33 6 52 13 05 55</div>
        </div>
      )}
    </div>
  );
};

export default ContactInfoButton;
