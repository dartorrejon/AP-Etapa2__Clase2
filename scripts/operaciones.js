let $suma = document.querySelector('.operacion-suma')
let $resta = document.querySelector('.operacion-resta')
let $multi = document.querySelector('.operacion-multi')
let $division = document.querySelector('.operacion-division')
let $signo = document.querySelector('.signo')
let $nro1 = document.getElementById('nro1')
let $nro2 = document.getElementById('nro2')
let $resultado = document.getElementById('resultado')
const $operaciones = document.querySelectorAll('.operacion')


//Patron para numero decimal y entero
let patronDecimal = /^[-+]?(\d+\.?\d*|\.\d+)$/

$suma.addEventListener('click', ev => {
    ev.preventDefault()
    if ($nro2.value == '' || $nro1.value == '') {
        $resultado.innerText = 'Falta ingresar un valor!'
        $resultado.classList.add('prohibido')
    } else if ($nro1.value.length > 6 || $nro2.value.length > 6) {
        $resultado.innerText = 'Limite maximo 999999'
        $resultado.classList.add('prohibido')
    } else if (patronDecimal.test($nro1.value) && patronDecimal.test($nro2.value)) {
        $resultado.innerHTML = (parseFloat($nro1.value) + parseFloat($nro2.value))
        $resultado.classList.remove('prohibido')
    } else {
        $resultado.classList.add('prohibido')
        $resultado.innerText = 'Valor Prohibido!'
    }
})

$resta.addEventListener('click', ev => {
    ev.preventDefault()
    if ($nro2.value == '' || $nro1.value == '') {
        $resultado.innerText = 'Falta ingresar un valor!'
        $resultado.classList.add('prohibido')
    } else if ($nro2.value.length > 6 || $nro1.value.length > 6) {
        $resultado.innerText = 'Limite maximo 999999'
        $resultado.classList.add('prohibido')
    } else if (patronDecimal.test($nro1.value) && patronDecimal.test($nro2.value)) {
        $resultado.innerHTML = (parseFloat($nro1.value) - parseFloat($nro2.value))
        $resultado.classList.remove('prohibido')
    } else {
        $resultado.classList.add('prohibido')
        $resultado.innerText = 'Valor Prohibido!'
    }
})

$multi.addEventListener('click', ev => {
    ev.preventDefault()
    if ($nro2.value == '' || $nro1.value == '') {
        $resultado.innerText = 'Falta ingresar un valor!'
        $resultado.classList.add('prohibido')
    } else if ($nro1.value.length > 6 || $nro2.value.length > 6) {
        $resultado.innerText = 'Limite maximo 999999'
        $resultado.classList.add('prohibido')
    } else if (patronDecimal.test($nro1.value) && patronDecimal.test($nro2.value)) {
        $resultado.innerHTML = (parseFloat($nro1.value) * parseFloat($nro2.value))
        $resultado.classList.remove('prohibido')
    } else {
        $resultado.classList.add('prohibido')
        $resultado.innerText = 'Valor Prohibido!'
    }
})

$division.addEventListener('click', ev => {
    ev.preventDefault()
    if ($nro2.value == '' || $nro1.value == '') {
        $resultado.innerText = 'Falta ingresar un valor!'
        $resultado.classList.add('prohibido')
    }else if(parseFloat($nro2.value) == 0){
        $resultado.innerText = 'El divisor debe ser distinto a 0!'
        $resultado.classList.add('prohibido')
    } else if ($nro1.value.length > 6 || $nro2.value.length > 6) {
        $resultado.innerText = 'Limite maximo 999999'
        $resultado.classList.add('prohibido')
    } else if (patronDecimal.test($nro1.value) && patronDecimal.test($nro2.value)) {
        $resultado.innerHTML = ((parseFloat($nro1.value) / parseFloat($nro2.value)).toFixed(2))
        $resultado.classList.remove('prohibido')
    } else {
        $resultado.classList.add('prohibido')
        $resultado.innerText = 'Valor Prohibido!'
    }
})

$operaciones.forEach(operacion => {
    operacion.addEventListener('mouseover', ev => {
        ev.preventDefault()
        
        $signo.textContent = ev.target.innerText
    })
})