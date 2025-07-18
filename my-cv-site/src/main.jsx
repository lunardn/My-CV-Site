import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const messages = {
  fr: {
    'form.name': 'Votre nom',
    'form.email': 'Votre email',
    'form.message': 'Votre message...',
    'form.submit': 'Envoyer',
    'form.success': '✅ Message envoyé avec succès !',
    'form.error': '❌ Une erreur est survenue. Réessayez.',
  },
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <IntlProvider locale="fr" messages={messages.fr}>
        <App />
      </IntlProvider>
    </BrowserRouter>
  </StrictMode>
);
