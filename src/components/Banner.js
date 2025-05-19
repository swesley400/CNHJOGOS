import React from 'react';
import './Banner.css';

function Banner() {
  // Conteúdo para o banner da esquerda
  const LeftBanner = () => (
    <div className="banner-container">
      <div className="banner-content">
        <div>
          <h1>Aprenda Placas</h1>
          <h2>Jogo Interativo</h2>
          <div className="banner-features">
            <div className="feature">
              <span className="feature-icon">🚦</span>
              <p>Centenas de placas</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🔊</span>
              <p>Feedback sonoro</p>
            </div>
          </div>
        </div>
        <div className="banner-note">
          <p>Ideal para candidatos à CNH</p>
        </div>
      </div>
    </div>
  );

  // Conteúdo para o banner da direita
  const RightBanner = () => (
    <div className="banner-container">
      <div className="banner-content">
        <div>
          <h1>Domine o Trânsito</h1>
          <h2>Estude e Aprenda</h2>
          <div className="banner-features">
            <div className="feature">
              <span className="feature-icon">🏆</span>
              <p>Sistema de pontuação</p>
            </div>
            <div className="feature">
              <span className="feature-icon">📝</span>
              <p>Descrições oficiais</p>
            </div>
          </div>
        </div>
        <div className="banner-note">
          <p>Jogo gratuito e eficiente</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="banners-wrapper">
      <LeftBanner />
      <RightBanner />
    </div>
  );
}

export default Banner;
