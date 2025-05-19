import React, { useState, useEffect, useCallback } from 'react';
import './SignGame.css';

function SignGame() {
  const [signs, setSigns] = useState([]);
  const [currentSign, setCurrentSign] = useState(null);
  const [options, setOptions] = useState([]);
  const [optionSigns, setOptionSigns] = useState([]);
  const [score, setScore] = useState(0);
  const [negativeScore, setNegativeScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showingAnswer, setShowingAnswer] = useState(false);

  // Funções para gerar sons usando Web Audio API
  const playSound = (frequency, duration, type = 'sine') => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gainNode.gain.value = 0.1;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();

    // Fade out
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    oscillator.stop(audioContext.currentTime + duration);
  };

  const playCorrectSound = () => {
    playSound(800, 0.15); // Som agudo curto
    setTimeout(() => playSound(1000, 0.15), 150); // Segundo som mais agudo
  };

  const playIncorrectSound = () => {
    playSound(300, 0.3, 'triangle'); // Som grave mais longo
  };

  const generateNewQuestion = useCallback((signsData) => {
    const signsList = signsData || signs;
    if (!Array.isArray(signsList) || signsList.length === 0) {
      console.error('No valid signs data available');
      return;
    }

    // Select random sign
    const randomIndex = Math.floor(Math.random() * signsList.length);
    const selectedSign = signsList[randomIndex];

    // Generate 3 wrong options with full sign objects
    const wrongSigns = signsList
      .filter(sign => sign.id !== selectedSign.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    // Add correct option and shuffle
    const allSigns = [...wrongSigns, selectedSign]
      .sort(() => 0.5 - Math.random());

    setCurrentSign(selectedSign);
    setOptions(allSigns.map(sign => sign.descricao));
    setOptionSigns(allSigns);
    setShowingAnswer(false);
  }, [signs]);

  useEffect(() => {
    fetch('/placas.json')
      .then(response => response.json())
      .then(data => {
        // Ensure data is an array
        const signsArray = Array.isArray(data) ? data : [];
        setSigns(signsArray);
        generateNewQuestion(signsArray);
      })
      .catch(error => {
        console.error('Error loading signs:', error);
      });
  }, []);
  const handleNextQuestion = () => {
    generateNewQuestion();
  };

  const handleAnswer = (selectedOption) => {
    setTotalQuestions(prev => prev + 1);
    
    if (selectedOption === currentSign.descricao) {
      setScore(prev => prev + 1);
      playCorrectSound();
      generateNewQuestion();
    } else {
      setNegativeScore(prev => prev + 1);
      playIncorrectSound();
      setShowingAnswer(true);
    }
  };

  if (!currentSign) return <div>Loading...</div>;

  return (
    <div className="game-container">
      <div className="score-container">
        <p>Acertos: {score} | Erros: {negativeScore} | Total: {totalQuestions}</p>
      </div>
      
      {showingAnswer ? (
        <>
          <div className="feedback incorrect">
            <p>Incorreto! Estude as placas abaixo:</p>
          </div>
          <div className="signs-grid">
            {optionSigns.map((sign, index) => (
              <div key={index} className={`sign-card ${sign.id === currentSign.id ? 'correct-sign' : ''}`}>
                <img 
                  src={sign.imageLocal} 
                  alt={sign.descricao}
                  className="sign-image"
                />
                <p className="sign-description">{sign.descricao}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="next-button"
          >
            Próxima Placa
          </button>
        </>
      ) : (
        <>
          <div className="sign-container">
            <img 
              src={currentSign.imageLocal} 
              alt="Placa de trânsito" 
              className="sign-image"
            />
          </div>

          <div className="options-container">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SignGame;
