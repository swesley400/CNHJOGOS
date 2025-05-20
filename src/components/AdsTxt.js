import { useEffect } from 'react';

function AdsTxt() {
  const adsContent = `# Ezoic Ads.txt Content for cnhjogos.com.br
# Generated automatically - DO NOT MODIFY
# Managed by Ezoic Ads.txt Manager
# Full content from: https://srv.adstxtmanager.com/19390/cnhjogos.com.br

google.com, pub-5944831390548482, RESELLER, f08c47fec0942fa0
ezoic.com, 1, DIRECT
aol.com, 6202, DIRECT
appnexus.com, 2234, DIRECT
openx.com, 537143344, DIRECT
adtech.com, 4327, DIRECT
advertising.com, 8603, DIRECT
contextweb.com, 508738, DIRECT
indexexchange.com, 177754, DIRECT
sonobi.com, 6e5cfb5dd8, DIRECT
sovrn.com, 217352, DIRECT
lijit.com, 217352, DIRECT
rubiconproject.com, 17960, DIRECT, 0bfd66d529a55807
rhythmone.com, 1767353092, DIRECT, a670c89d4a324e47
pubmatic.com, 137711, DIRECT, 5d62403b186f2ace
pubmatic.com, 156383, DIRECT, 5d62403b186f2ace
`;

  useEffect(() => {
    // Modificar o título e o tipo de conteúdo da página para o formato apropriado para um arquivo de texto
    document.title = 'ads.txt';
    
    // Remover todos os elementos do body exceto o conteúdo do ads.txt
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(child => {
      if (child.id !== 'ads-txt-content') {
        child.style.display = 'none';
      }
    });
    
    // Remover o root div do React
    const rootDiv = document.getElementById('root');
    if (rootDiv) {
      rootDiv.style.display = 'none';
    }
    
    return () => {
      // Restaurar os elementos quando o componente for desmontado
      bodyChildren.forEach(child => {
        child.style.display = '';
      });
      if (rootDiv) {
        rootDiv.style.display = '';
      }
      document.title = 'Jogo de Placas de Trânsito | CNH Jogos';
    };
  }, []);

  // Criar um elemento pré-formatado fora da estrutura normal do React
  useEffect(() => {
    const preElement = document.createElement('pre');
    preElement.id = 'ads-txt-content';
    preElement.style.fontFamily = 'monospace';
    preElement.style.whiteSpace = 'pre';
    preElement.style.margin = '0';
    preElement.style.padding = '0';
    preElement.textContent = adsContent;
    
    document.body.appendChild(preElement);
    
    return () => {
      document.body.removeChild(preElement);
    };
  }, [adsContent]);

  return null; // Este componente não renderiza nada visível no DOM do React
}

export default AdsTxt;
