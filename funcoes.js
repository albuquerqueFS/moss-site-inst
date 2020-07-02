let login_usuario;
let senha_usuario;

function redirecionar_login() {
    window.location.href = 'www.google.com.br';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario;
    senha_usuario = sessionStorage.senha_usuario;
    
    if (login_usuario == undefined)  {
        redirecionar_login();
    } 
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/users/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/users/sair/${login_usuario}`, {cache:'no-store'}); 
}