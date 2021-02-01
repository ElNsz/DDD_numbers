const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);



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
        alert: 'Por favor, preencha no mínimo 8 e no máximo 9 digitos.'
    },
    methods: {
        enviar: function enviar() {
            if (qs('.input_num').value.length < 8) {
                qs('.alert').style.display = 'block'
                qs('.input_num').focus();
                return false
            }
            if (qs('.input_num').value.length > 9) {
                qs('.alert').style.display = 'block'
                qs('.alert').style.display = 'block'
                qs('.input_num').focus();
                return false
            }
            else {

                var valor = qs('.input_num').value; // Pegar o valor do input
                function qsih(order, number) {
                    qs('.alert').removeAttribute('style')
                    qs('.' + order).innerHTML = 'https://wa.me/+55' + number + valor
                    qs('.' + order).href = 'https://wa.me/+55' + number + valor
                }
                qsih('a', '61')
                qsih('b', '62')
                qsih('c', '64')
                qsih('d', '65')
                qsih('e', '66')
                qsih('f', '67')
                qsih('g', '82')
                qsih('h', '71')
                qsih('i', '73')
                qsih('j', '74')
                qsih('k', '75')
                qsih('l', '77')
                qsih('m', '85')
                qsih('n', '88')
                qsih('o', '98')
                qsih('p', '99')
                qsih('q', '83')
                qsih('r', '81')
                qsih('s', '87')
                qsih('t', '86')
                qsih('u', '89')
                qsih('v', '84')
                qsih('w', '79')
                qsih('x', '68')
                qsih('y', '96')
                qsih('z', '92')
                qsih('aa', '97')
                qsih('ab', '91')
                qsih('ac', '93')
                qsih('ad', '94')
                qsih('ae', '69')
                qsih('af', '95')
                qsih('ag', '63')
                qsih('ah', '27')
                qsih('ai', '28')
                qsih('aj', '31')
                qsih('ak', '32')
                qsih('al', '33')
                qsih('am', '34')
                qsih('an', '35')
                qsih('ao', '37')
                qsih('ap', '38')
                qsih('aq', '21')
                qsih('ar', '22')
                qsih('as', '24')
                qsih('at', '11')
                qsih('au', '12')
                qsih('av', '13')
                qsih('aw', '14')
                qsih('ax', '15')
                qsih('ay', '16')
                qsih('az', '17')
                qsih('ba', '18')
                qsih('bb', '19')
                qsih('ba', '41')
                qsih('bb', '42')
                qsih('ba', '43')
                qsih('bb', '44')
                qsih('ba', '45')
                qsih('bb', '46')
                qsih('ba', '51')
                qsih('bb', '53')
                qsih('ba', '54')
                qsih('bb', '55')
                qsih('ba', '47')
                qsih('bb', '48')
                qsih('bc', '49')

            }

        }
    }
});
