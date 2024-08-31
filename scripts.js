document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pega os valores dos inputs
    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('data-nascimento').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;

    // Cria uma nova linha na tabela
    let table = document.getElementById('contacts-list');
    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${dataNascimento}</td>
        <td>${celular}</td>
        <td>${email}</td>
        <td><button class="btn btn-danger btn-sm">Excluir</button></td>
    `;

    // Limpa os campos após submissão
    document.getElementById('contact-form').reset();
});
