document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('#mostrar');
  const botoes = document.querySelectorAll('.btn');

  const conteudos = {
    quemSomos: `
      <h1>Quem somos?</h1>
      <p>A <strong>Alpha Video Maker</strong> é especializada em filmagens aéreas com drones,
      atendendo eventos, inspeções, publicidade e o setor imobiliário. Nosso diferencial é a
      <strong>qualidade cinematográfica</strong> e o impacto visual das imagens que entregamos.</p>
    `,
    garantia: `
      <h1>Garantia</h1>
      <p>Confiamos na nossa entrega. Por isso, oferecemos <strong>garantia de satisfação</strong>:
      se não cumprir o prazo ou a qualidade prometida, você pode optar por reembolso total
      ou <strong>upgrade gratuito</strong> no próximo serviço.</p>
    `,
    servicos: `
      <h1>Serviços</h1>
      <ul>
        <li><strong>Eventos:</strong> casamentos, shows, festas, feiras</li>
        <li><strong>Inspeções:</strong> obras, estruturas verticais, monitoramentos</li>
        <li><strong>Imobiliárias:</strong> captação de imóveis com imagens aéreas incríveis</li>
        <li><strong>Construções:</strong> acompanhamento e cobertura com alta precisão</li>
        <li><strong>Automobilismo:</strong> imagens e acompanhementos no mundo do automobilismo</li>
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

  document.getElementById('btnGarantia').addEventListener('click', () => {
    atualizarConteudo(conteudos.garantia);
    atualizarAtivo('btnGarantia');
  });

  document.getElementById('btnServicos').addEventListener('click', () => {
    atualizarConteudo(conteudos.servicos);
    atualizarAtivo('btnServicos');
  });
});



