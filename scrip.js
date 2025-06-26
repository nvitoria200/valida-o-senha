// Adiciona um "ouvinte de evento" ao formulário de login.
// Quando o formulário é enviado (botão "Entrar" clicado), a função anônima é executada.
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // previne o comportamento padrão do formulário de recarregar a página
    event.preventDefault(); 

    // Obtém os valores digitados nos campos de usuário e senha
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    
    // Obtém o elemento <p> onde as mensagens serão exibidas
    const messageElement = document.getElementById('message');

    // Define as credenciais corretas
    const validUsername = 'admin';
    const validPassword = '123@456';

    // Verifica se o usuário e a senha digitados correspondem às credenciais válidas
    if (usernameInput === validUsername && passwordInput === validPassword) {
        // Se estiverem corretos:
        // Define o texto da mensagem de sucesso
        messageElement.textContent = 'Login bem-sucedido! Bem-vindo(a), ' + validUsername + '!';
        // Adiciona a classe 'success' para estilizar a mensagem com a cor verde
        messageElement.className = 'message success';
    } else {
        // Se estiverem incorretos:
        // Define o texto da mensagem de erro
        messageElement.textContent = 'Usuário ou senha incorretos. Tente novamente.';
        // Adiciona a classe 'error' para estilizar a mensagem com a cor vermelha
        messageElement.className = 'message error';
    }
});