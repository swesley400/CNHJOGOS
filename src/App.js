import './App.css';
import SignGame from './components/SignGame';
import Banner from './components/Banner';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogo das Placas de Trânsito</h1>
      </header>
      <Banner />
      <main>
        <SignGame />
      </main>
      <CookieConsent />
    </div>
  );
}

export default App;
