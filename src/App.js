import './App.css';
import SignGame from './components/SignGame';
import Banner from './components/Banner';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './components/PrivacyPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/" element={
            <>
              <header className="App-header">
                <h1>Jogo das Placas de Trânsito</h1>
              </header>
              <Banner />
              <main>
                <SignGame />
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
