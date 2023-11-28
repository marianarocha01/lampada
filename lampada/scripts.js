let lampadaLigada = false; /* Cria uma variável que é usada para rastrear o estado atual da lâmpada (ligada ou desligada). */

function toggleLampada() { /* Acionada quando o botão na página HTML é clicado, normalmente associado a um evento de clique. */
    const lampada = document.getElementById('lampada'); /* Obtém a referência do elemento da lâmpada na página HTML com o ID "lampada". */
    const button = document.querySelector('button'); /* Obtém a referência do primeiro botão encontrado na página HTML. */
    const body = document.body; /* Obtém a referência do elemento body da página. */
  
    // Alterna o estado da lâmpada
    lampadaLigada = !lampadaLigada; /* Inverte o valor da variável lampadaLigada, alternando entre true e false. */

    // Atualiza a imagem da lâmpada
    lampada.src = lampadaLigada ? 'https://i.postimg.cc/6QyTynzr/bulb-on.png' : 'https://i.postimg.cc/KjK1wL3c/bulb-off.png'; /* Altera o atributo src da imagem da lâmpada para a versão acesa ou apagada, dependendo do valor atual de lampadaLigada. */

    // Altera o texto do botão
    button.textContent = lampadaLigada ? 'Desligar' : 'Ligar'; /* Altera o texto do botão para "Desligar" se a lâmpada estiver ligada, e "Ligar" se estiver desligada. */

    // Altera o fundo da página com transição suave
    body.style.backgroundColor = lampadaLigada ? '#ffd700' : '#000000'; /* Altera a cor de fundo da página para amarelo (#ffd700) se a lâmpada estiver ligada, e para preto (#000000) se estiver desligada. */
}
