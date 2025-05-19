import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Política de Privacidade</h1>
        
        <p>Última atualização: 19 de maio de 2025</p>
        
        <p>A sua privacidade é importante para nós. É política do CNH Jogos respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site <a href="https://cnhjogos.com.br">CNH Jogos</a>.</p>
        
        <h2>1. Informações que coletamos</h2>
        
        <p>Nosso site pode utilizar cookies para melhorar a experiência do usuário. Cookies são pequenos arquivos armazenados no seu dispositivo que nos ajudam a lembrar certas informações entre visitas. Estas informações podem incluir:</p>
        
        <ul>
          <li>Preferências do usuário</li>
          <li>Progresso do jogo</li>
          <li>Informações de sessão</li>
        </ul>
        
        <p>Também podemos utilizar serviços de terceiros, como o Google Analytics e Google AdSense, que coletam, monitoram e analisam dados para melhorar o desempenho do nosso site.</p>
        
        <h2>2. Como usamos suas informações</h2>
        
        <p>As informações que coletamos são usadas para:</p>
        
        <ul>
          <li>Melhorar a experiência do usuário</li>
          <li>Salvar o progresso do jogo</li>
          <li>Personalizar o conteúdo</li>
          <li>Exibir anúncios relacionados aos seus interesses</li>
          <li>Gerar estatísticas anônimas sobre o uso do site</li>
        </ul>
        
        <h2>3. Google AdSense</h2>
        
        <p>Utilizamos o Google AdSense para exibir anúncios. O Google utiliza cookies DART para exibir anúncios com base nas visitas dos usuários ao nosso site e a outros sites na internet. Os usuários podem desativar o uso do cookie DART visitando a <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Política de privacidade da rede de conteúdo e dos anúncios do Google</a>.</p>
        
        <h2>4. Seus direitos</h2>
        
        <p>Você tem o direito de:</p>
        
        <ul>
          <li>Saber quais dados pessoais temos sobre você</li>
          <li>Solicitar a exclusão dos seus dados</li>
          <li>Desativar cookies através das configurações do seu navegador</li>
        </ul>
        
        <h2>5. Alterações nesta política</h2>
        
        <p>Podemos atualizar esta política periodicamente. Recomendamos consultar esta página regularmente para estar ciente de quaisquer alterações.</p>
        
        <h2>6. Contato</h2>
        
        <p>Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco através do email: contato@cnhjogos.com.br</p>
        
        <Link to="/" className="back-button">Voltar ao Jogo</Link>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
