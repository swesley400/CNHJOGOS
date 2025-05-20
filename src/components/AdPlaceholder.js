import React from 'react';

/**
 * Componente para renderizar um espaço de anúncio Ezoic seguindo as diretrizes oficiais
 * @param {Object} props - As propriedades do componente
 * @param {number} props.id - O ID do placeholder do anúncio Ezoic
 */
function AdPlaceholder({ id }) {
  return (
    <>
      <div id={`ezoic-pub-ad-placeholder-${id}`}></div>
      <script dangerouslySetInnerHTML={{
        __html: `
          ezstandalone.cmd.push(function() {
            ezstandalone.showAds(${id});
          });
        `
      }}></script>
    </>
  );
}

export default AdPlaceholder;
