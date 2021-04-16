const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

function checkNumber(valor) {
    var regra = /^[0-9]+$/;
    if (valor.match(regra)) {
      console.log('Deu certo cara!')
    }else{
      alert("Permitido somente número inteiro positivo!");
      qs('.input_num').value = ''
    }
  }; 

let app = new Vue({
    el: '.frase_inicial',
    data: {
        bv: 'Bem vindo.',
        desc: 'Aqui é uma página para quem tem curiosidade em saber quem mais no Brasil tem seu número, porém com DDD diferente.'
    }
});
let listarNum = new Vue({
    el: '.listaNum',
    data:{
        label: 'Digite aqui seu número sem DDD com o 9 na frente:',
        alert: 'Por favor, preencha no mínimo 8 e no máximo 9 digitos.',
        lista: [{ddd:'61'},{ddd:'62'},{ddd:'64'},{ddd:'65'},{ddd:'66'},{ddd:'67'},{ddd:'82'},{ddd:'71'},{ddd:'73'},{ddd:'74'},{ddd:'75'},{ddd:'77'},{ddd:'85'},{ddd:'88'},{ddd:'98'},{ddd:'99'},{ddd:'83'},{ddd:'81'},{ddd:'87'},{ddd:'86'},{ddd:'89'},{ddd:'84'},{ddd:'79'},{ddd:'68'},{ddd:'96'},{ddd:'92'},{ddd:'97'},{ddd:'91'},{ddd:'93'},{ddd:'94'},{ddd:'69'},{ddd:'95'},{ddd:'63'},{ddd:'27'},{ddd:'28'},{ddd:'31'},{ddd:'32'},{ddd:'33'},{ddd:'34'},{ddd:'35'},{ddd:'37'},{ddd:'38'},{ddd:'21'},{ddd:'22'},{ddd:'24'},{ddd:'11'},{ddd:'12'},{ddd:'13'},{ddd:'14'},{ddd:'15'},{ddd:'16'},{ddd:'17'},{ddd:'18'},{ddd:'19'},{ddd:'41'},{ddd:'42'},{ddd:'43'},{ddd:'44'},{ddd:'45'},{ddd:'46'},{ddd:'51'},{ddd:'53'},{ddd:'54'},{ddd:'55'},{ddd:'47'},{ddd:'48'},{ddd:'49'}],
        mostrar:false,
        numeros:'',
        waMe:'https://wa.me/+55'
    },
    methods: {
        enviar() {
            if (qs('.input_num').value.length < 8) {
                qs('.alert').style.display = 'block'
                qs('.input_num').focus();
                listarNum.mostrar = false
                return false
            }
            if (qs('.input_num').value.length > 9) {
                qs('.alert').style.display = 'block'
                qs('.input_num').focus();
                listarNum.mostrar = false
                return false
            }
            else {
                let valor = qs('.input_num').value; // Pegar o valor do input
                listarNum.mostrar = true
                listarNum.numeros = valor
                return true
            }
        }
    }
});