module.exports = {
    promedio: function(numero1, numero2, numero3){
        return((numero1+numero2+numero3)/3);
    },
    posicion: function(pos){
        let array = ["a","b","c","d","e","f","g","h","i","j"];
        return array[pos];
    },
    tamanioArray: function(array) {
        return array.length;
    },
    soy: function(nombre){
        return "mi nombre es:" + nombre
    },
    factorial: function(numero){
        let f = 1;
        for(let i = numero; i > 0; i--){
            f = i*f;
        }
        return f;
    }
}
