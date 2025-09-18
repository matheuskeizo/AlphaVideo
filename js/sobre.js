document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('#mostrar');
  const botoes = document.querySelectorAll('.btn');

  const conteudos = {
    quemSomos: `
      <h1>Quem somos?</h1>
      <p>Na <strong>Alpha Video Maker</strong> acreditamos que cada projeto merece muito mais do que um simples registro: merece linguagem cinematográfica, emoção e identidade própria. Nosso propósito é levar o olhar do cinema para o mercado comum, transformando momentos, espaços e marcas em produções visuais que impressionam, valorizam e inspiram.</p>

        <p>Criamos vídeos com estética cinematográfica, explorando ângulos, movimentos e narrativas capazes de emocionar, encantar e transmitir autenticidade. Cada frame é pensado para ter impacto e deixar uma marca memorável, seja em obras, imóveis, empresas, eventos ou publicidade.</p>

        <p> O que nos move é a paixão por contar histórias reais com a sofisticação do cinema — unindo técnica, criatividade e sensibilidade. Acreditamos que não é a grandiosidade da estrutura que define a qualidade, mas a forma como transformamos cada detalhe em experiência imersiva.</p>
        
        <p>Na Alpha, o cotidiano ganha vida de tela grande: com consistência, visão criativa e dedicação, elevamos projetos comuns ao patamar de obras cinematográficas.</p>
    `,
  
    servicos: `
      <h1>Serviços</h1>
      <ul>
        <li><strong>Institucional:</strong> Comércios, Instituições, escritórios, Startups, franquias</li>
        <li><strong>Imóveis:</strong> Captação de imóveis com imagens aéreas incríveis</li>
        <li><strong>Construções:</strong> Acompanhamento e cobertura com alta precisão</li>
        <li><strong>Publicidade:</strong> Gravações e takes para teaser e redes sociais </li>
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



