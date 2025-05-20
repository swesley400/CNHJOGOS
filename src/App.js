import './App.css';
import SignGame from './components/SignGame';
import Banner from './components/Banner';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './components/PrivacyPolicy';
import SEOContent from './components/SEOContent';
import AdPlaceholder from './components/AdPlaceholder';
import AdsTxt from './components/AdsTxt';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ads.txt" element={<AdsTxt />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/" element={
            <>
              <header className="App-header">
                <h1>Jogo de Placas de Trânsito | Simulado Online para Prova do DETRAN</h1>
                <h2>Aprenda sinalização de trânsito jogando - Ideal para primeira habilitação (CNH)</h2>
              </header>
              <Banner />
              <main>
                <SignGame />
                <AdPlaceholder id={101} />
                <SEOContent />
              </main>
            </>
          } />
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
