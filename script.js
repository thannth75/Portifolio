// Seleciona todos os links do menu
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Remove a classe 'active' de todos os links
    links.forEach(l => l.classList.remove('active'));
    // Adiciona a classe 'active' no link clicado
    this.classList.add('active');

    // Scroll suave até a seção clicada
    const sectionId = this.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Para acessibilidade: coloca o foco na seção navegada
      section.focus();
    }
  });
});

// Função para simular envio do formulário
function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome && email && mensagem) {
    alert(`Obrigado, ${nome}! Sua mensagem foi recebida.`);
    // Limpa o formulário após o envio
    document.getElementById('contactForm').reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }

  return false;
}
