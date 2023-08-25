const math = {};

//se define la funcion como (invertirNumero) el parametro dado por medio de la funcion flecha
const invertirNumero = numero => {
    let invertido = 0;//el metodo invertido, es usado para invertir el orden de los elementos,el primero pasa a ser el ultimo y el ultimo pasa a ser primero
    while (numero !=0) {/*while crea  un bucle que ejecuta el comando hasta que la respuesta sea falsa
    , en este caso se ejecuta mientras el numero no sea cero*/
        invertido = 10 * invertido + numero % 10//este comando se utiliza para invertir un número en notación decimal.
        numero = (Math.floor(numero / 10))//este comando se usa para eliminar el dígito menos significativo de un número en notación decimal.
    }
    return invertido;//se ejecuta para devolver el numero invertido
};
// Definición de la funcion 8invertirNumeroComoTexto) para invertir un número interpretado como texto, tulizando la funcion flecha.
const invertirNumeroComoTexto = numero => {
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");/*se utiliza una funcion utilizando string
    para convertir el número a una cadena de texto, split divide la cadena en caracteres individuales,reverse 
    invierte el orden de los caracteres, y join une los caracteres invertidos nuevamente en una cadena de texto.
     El resultado  es la representación invertida del número como una cadena de texto.*/

    return numeroInvertidoComoTexto;//Devuelve el numeri invertido como texto
};
//Definicion de la funcion (invertirTexto) que toma el parametro" texto" para invertirlo
const invertirTexto = texto => {
    const splitText = texto.split('');//divide la cadena en caracteres individuales
    const reversedText = splitText.reverse();//invierte el orden de los caracteres
    const joinedText = reversedText.join('');//une los caracteres invertidos nuevamente en una cadena de texto del arreglo
    return joinedText;//devuelve la cadena de texto invertida 
};
//se define la funcion (inveritirArreglo) con el parametro "arreglo" invirtiendo el orden de los elementos del arreglo
const invertirArreglo = arreglo =>  {
    const reverseObject = arreglo.reverse();// invierte el orden de los elementos en el arreglo
    return reverseObject;// devuelve el arreglo con los elementos invertidos

};
// Se definine la  función (conersionDatos) con el parametro "data" para realizar conversiones basadas en el tipo de dato
const conversionDatos = data =>  {
    let dataType = typeof data;//se sua la variable para obtener el tipo de dato
    let dataVar;

    if (data === '' || data === null || data === undefined || data.length === 0) {
        dataVar = 'El valor ingresado esta vacio o incorrecto';
    } else {
        console.log (`El valor ingresado es de tipo: ${dataType}, con un valor de: ${data}`);
        switch (dataType) {/* una estructura de control de flujo que permite simplificar la evaluación de múltiples condiciones.
        es útil cuando se necesita comparar una misma expresión con diferentes valores y ejecutar diferentes bloques de código en función del valor que coincida.*/
            case 'number' ://representa un valor especifico, si la expresion coincide con la respuesta que es, es ejecutada*/
                dataVar = invertirNumero(data);
                break;/*se utiliza para detener la ejecucion del switch, una vez haya encontrado la respuesta y cioncidencia, 
                el flujo de ejecución continuará pasando por todos los casos siguientes, incluso si no coinciden con el valor de la expresión, se usa solo para ejecutar la perte del codigo que coincida*/
            case 'string' :
                dataVar = invertirTexto(data);
                break;
            case 'object' :
                dataVar = invertirArreglo(data);
                break;
            default://vota un mensaje de error si el valor ingresado, no tiene nada que ver o no coincide con ninguno de los casos.
                dataVar = 'El Valor ingresado no se puede invertir';        
                    
        }
    }
    return dataVar;// devuelve dataVar, que contendrá el resultado de la inversión o el mensaje de error, según el caso.//
}
// aqui hay un bjeto math que agrupa todas las funciones
math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports = math;//exporta el objeto math para que se pueda usar en otros archivos

