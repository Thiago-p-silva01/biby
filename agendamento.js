document.getElementById('formAgendamento').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nomeCliente').value;
  const data = document.getElementById('dataAgendamento').value;
  const hora = document.getElementById('horaAgendamento').value;

  const novoAgendamento = `${data} às ${hora} - ${nome}`;
  const lista = document.getElementById('listaAgendamentos');

  const item = document.createElement('p');
  item.textContent = novoAgendamento;
  lista.appendChild(item);

  this.reset();
});