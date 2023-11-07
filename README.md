## Clase 2 - Ejercitación
## Ejercicio 1
Tengo desarrollada la siguiente función en javascript:

```javascript
function suma (a,b,callback){
let c = a +b;
callback()
}
```
#### 1. ¿Que es el tercer parámetro recibido?
    
El tercer parametro recibido se llama funcion *callback* Es una funcion que se pasa como argumento a otra funcion.

#### 2. ¿En que casos es obligatorio desarrollar este tipo de funciones?

Es obligatorio usar esta funcion cuando el flujo de control no es lineal o predecible, unos ejemplos claros del uso son:
* Manejo de eventos.
* Temporizacion.
* Reutilizacion de código.
* LLamadas Asincrónicas.
* Manejo de errores.

#### 3. Realizar un llamado a la función de ejemplo.


```javascript
function suma(a, b, callback) {
  let c = a + b;
  callback(c);
}

function resultado(res) {
  console.log(`el resultado de la suma es ${res}`);
}

suma(1, 2, resultado);
```

## Ejercicio 2
Desarrollador una calculadora que tenga:
* 2 campos inputs para los operadnos
* 4 botones de operadores básicos (suma, resta, multiplicación, división)

Al realizar la cuenta se deberá actualizar el campo resultado.

***El codigo del ejemplo se encuentra en mi repo de [Github][Github].*** 🌎

***El ejercicio se encuentra deployado en [Calculadora Simple][calculadora].*** 😎



 [Github]:https://github.com/dartorrejon/AP-Etapa2__Clase2

 [calculadora]:https://dartodevsimplecalc.netlify.app