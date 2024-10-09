document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value;
    alert('Você buscou por: ' + searchTerm);
    // Aqui você pode implementar a lógica de busca
  });
  