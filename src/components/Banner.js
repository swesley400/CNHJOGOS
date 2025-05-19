import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1>Aprenda Placas de Trânsito</h1>
        <h2>Jogo Interativo para Memorizar Sinalizações</h2>
        <div className="banner-features">
          <div className="feature">
            <span className="feature-icon">🚦</span>
            <p>Centenas de placas</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🔊</span>
            <p>Feedback sonoro</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🏆</span>
            <p>Sistema de pontuação</p>
          </div>
        </div>
        <div className="banner-cta">
          <button className="cta-button">Começar Agora</button>
          <p className="banner-note">Ideal para estudantes e candidatos à CNH</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
