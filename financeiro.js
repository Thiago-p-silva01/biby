document.getElementById('formFinanceiro').addEventListener('submit', function(e) {
  e.preventDefault();

  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const tipo = document.getElementById('tipo').value;

  const registro = document.createElement('p');
  registro.textContent = `${tipo === 'entrada' ? '+' : '-'} R$ ${valor.toFixed(2)} — ${descricao}`;
  registro.style.color = tipo === 'entrada' ? 'green' : 'red';

  document.getElementById('listaFinanceiro').appendChild(registro);

  this.reset();
});