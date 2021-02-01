const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

function enviar() {
    let valor = qs('.input_num').value; // Pegar o valor do input
    let dddItem = qs('.numeros a').cloneNode(true); // Clonar a tag <li>

    alert('Vai clicando nos wa.me ou copia e cola em algum grupo')
    qs('.numeros a').innerHTML = `https://wa.me/+55${valor}`
}
