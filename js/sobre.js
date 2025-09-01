document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('#mostrar');
  const botoes = document.querySelectorAll('.btn');

  const conteudos = {
    quemSomos: `
      <h1>Quem somos?</h1>
      <p>Na <strong>Alpha Video Maker</strong> acreditamos que cada projeto merece mais do que um 
simples registro: merece ganhar vida, emoção e identidade própria. Nosso 
propósito é transformar momentos, espaços e marcas em histórias visuais que 
inspiram e conectam pessoas.
Criamos vídeos que unem criatividade e sensibilidade, explorando ângulos, ritmos 
e narrativas capazes de despertar sentimentos e transmitir a verdadeira essência 
do que é mostrado. Seja para valorizar um imóvel, acompanhar a evolução de 
uma obra, fortalecer a identidade de uma empresa, impulsionar uma campanha 
publicitária ou eternizar a energia de um evento, buscamos sempre entregar 
muito além da imagem: entregamos experiências.
O que nos move é a paixão por contar histórias de forma autêntica, com cuidado 
em cada detalhe e impacto em cada frame. Acreditamos que não é a grandeza da 
estrutura que define a qualidade, mas sim a visão criativa e a dedicação em 
transformar ideias em algo memorável.</p>
    `,
  
    servicos: `
      <h1>Serviços</h1>
      <ul>
        <li><strong>Institucional:</strong> casamentos, shows, festas, feirasm confraternizações e aberturas</li>
        <li><strong>Imóveis:</strong> captação de imóveis com imagens aéreas incríveis</li>
        <li><strong>Construções:</strong> acompanhamento e cobertura com alta precisão</li>
        <li><strong>Publicidade:</strong> Gravações e takes aereos para teaser e redes sociais </li>
      </ul>
    `
  };

  function atualizarConteudo(html) {
    section.innerHTML = html;
    section.classList.remove('conteudo');
    void section.offsetWidth;
    section.classList.add('conteudo');
  }

  function atualizarAtivo(idAtivo) {
    botoes.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    const ativo = document.getElementById(idAtivo);
    ativo.classList.add('active');
    ativo.setAttribute('aria-pressed', 'true');
  }

  document.getElementById('btnQuemSomos').addEventListener('click', () => {
    atualizarConteudo(conteudos.quemSomos);
    atualizarAtivo('btnQuemSomos');
  });


  document.getElementById('btnServicos').addEventListener('click', () => {
    atualizarConteudo(conteudos.servicos);
    atualizarAtivo('btnServicos');
  });
});



