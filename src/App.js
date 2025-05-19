import './App.css';
import SignGame from './components/SignGame';
import Banner from './components/Banner';

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
    </div>
  );
}

export default App;
