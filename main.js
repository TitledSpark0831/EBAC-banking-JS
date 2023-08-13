const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
var formEhValido = false; //começa como falso

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2; //retorna um true se for maior ou igual a dois
}

form.addEventListener('submit', function(e) {

    
    e.preventDefault();

    const numeroContaBeneficio = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficio.value}</b>`;

    if (formEhValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficio.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.botder = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEhValido = validaNome(e.target.value);

    if (!formEhValido) {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})
