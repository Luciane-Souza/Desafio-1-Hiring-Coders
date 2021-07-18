const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados = {
        nome,
        email
    }
    let converterJson = JSON.stringify(dados);

    localStorage.setItem('cadastro', converterJson);

    let contemFormulario = document.getElementById('contem-formulario');

    let carregando = `<img class="spinner" src="img/spinner.svg" alt="carregando">`;

    let mensagem = `<h2 class="spinner">Email cadastrado com sucesso!</h2>`;
    
    contemFormulario.innerHTML = carregando;

    setTimeout(()=>{
        contemFormulario.innerHTML = mensagem;
    }, 1000)
})