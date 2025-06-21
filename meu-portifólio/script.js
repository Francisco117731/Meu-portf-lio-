document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  this.reset();
});
