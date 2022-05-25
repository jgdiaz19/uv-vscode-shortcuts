
/*
  1. Ctrl + Shift + P  -> Configure User Snippets
  2. Selecciona el lenguaje de programacion (en este caso typeScript)
  3. Crear Snippet con los parametros del objeto JSON:
      a) Nombre del snippet
      b) prefix = metodo abreviado para invocar el snippet
      c) body = cuerpo del snippet
      d) description

  Ejemplo:
          "Mostrar log":{
          "prefix": "ccc",
          "body": [
            "console.log('Hola UV');"],
          "description": "Mostrar log en la consola..."
        }

  Hacer ajustes para navegaciones en snippet:

      "Mostrar log":{
      "prefix": "ccc",
      "body": [
          "console.log(${1:'Hola UV'});",
          "$2"
        ],
      "description": "Mostrar log en la consola..."
      }

 */


// Ejemplo final
console.log('Hola UV');


/*

*/





