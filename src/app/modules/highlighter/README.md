# High Lighter Module

En este modulo se situaran componentes y servicios que permitan hacer el resaltado de código de programacion al intentar crear un respuesta o una pregunta en nuestro sitio web.

## Índice

- Flujo de procesos
- Arquitectura
- Guia de estilos
- Guia de lenguajes de programacion

## Flujo de procesos

1.  El flujo comienza en un componente de entrada en el cual se escribirá el código de programación y cada vez que el usuario escriba en el se dispará un evento.

2.  Este evento enviará todo el que se encuentre en el componente a un servicio el cual se encargará de separar cada palabra, caractér y espacio en un array

3.  Este array se enviará a otro servicio el cual se en cargará de clasificar cada palabra o caracter y devolver un array nuevo con los datos mas las clasificaciones

4.  Ya con los datos y las clasificaciones se crearán componentes equivalentes a cada posicion del array los cuales tendran clases segun su clasificacion y renderizaran las palabras , espacios o caracteres

5.  Al tener los componentes separados y clasificados seran enviados al componente inicial el cual renderizará cada uno y estos tendrán un estilo en base a su clasificación y de esta forma se hará el resaltado
