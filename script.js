// 🔥 Registro do Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(err => console.error('Erro ao registrar Service Worker', err));
}

// 🔒 Login com usuário "biby" / senha "1234"
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const userInput = document.getElementById('username');
  const passInput = document.getElementById('password');

  if (!form || !userInput || !passInput) {
    console.error("Erro: IDs do formulário não encontrados no HTML.");
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = userInput.value.trim();
    const pass = passInput.value.trim();

    console.log("Usuário digitado:", user);
    console.log("Senha digitada:", pass);

    if (user === 'biby' && pass === '1234') {
      alert('Login realizado com sucesso!');
      window.location.href = 'dashboard.html';
    } else {
      alert('Usuário ou senha inválidos!');
    }
  });
});

// 🚀 Lógica de instalação com beforeinstallprompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // impede o prompt automático
  deferredPrompt = e;
  console.log("Evento beforeinstallprompt capturado");
});

const installBtn = document.getElementById('installBtn');

if (installBtn) {
  installBtn.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // mostra a janela oficial de instalação
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou instalar');
        } else {
          console.log('Usuário cancelou');
        }
        deferredPrompt = null;
      });
    } else {
      // fallback: instruções manuais
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes("android")) {
        alert("No Android: abra o menu ⋮ do navegador e escolha 'Adicionar à tela inicial'.");
      } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
        alert("No iPhone/iPad: toque em Compartilhar → 'Adicionar à Tela de Início'.");
      } else {
        alert("No notebook: use Chrome ou Edge e clique no ícone de instalar na barra de endereços.");
      }
    }
  });
}