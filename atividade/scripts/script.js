function verificarIdade() {
    const maioridade = 18;
    let nome = document.getElementById('nome'). value;
    let idade = document.getElementById('idade'). value;

    if (nome === "" || idade === "") {
        document.getElementById('mensagem').innerHTML = "Por favor, preencha todos os campos!";
        return;
    }

    idade = parseInt(idade);

    if (isNaN(idade) || idade < 0) {
        document.getElementById('mensagem').innerHTML = "Por favor, digite um número válido";
        return;
    }

    if (idade >= maioridade) {
        document.getElementById('mensagem').innerHTML = "Olá, " + (nome) + ", você é maior de idade!";
    }
    else {
        document.getElementById('mensagem').innerHTML = "Olá, " + (nome) + ", você é menor de idade!";
    }
}