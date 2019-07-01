### 1) Identacion

La identacion debe de ser de cuatro espacios, y no puede haber mas de 4 niveles de identacion, si una funcion requiere mas niveles de indetacion entonces se debera replantear.
No colocar mas de una sentencia en una linea, ejemplo.
#### Esto esta mal:

``` [javascript]
var i = 0
if (true) { i = 10 }
```
#### La forma correcta es la siguiente:
``` [javascript]
var i = 0;
if (true) { 
    i = 10;
}
```

### 2) Romper lineas largas

Las sentencias de más de 80 columnas de largo se dividirán en partes sensibles, a menos que la superación de 80 columnas aumente significativamente la legibilidad y no oculte información.

### 3) Colocacion de llaves

Poner la llave que abre al final de la linea y la llaves que cierra al incio. Ejemplo:
``` [javascript]
function test() {
    console.log('funcion test')
}
```

los if anidados se escriben de la siguente forma:
``` [javascript]
if (x == y) {
    ...
} else if (x > y) {
    ...
} else {
    ....
}
```

### 4) Colocacion de espacios

Se deja un espacion despues de las palabras reservadas **if, switch, case, for, do, while**, poner un espacio alrededor (a cada lado de) la mayoría de los operadores binarios y ternarios **=, +, -, <, >, *, /, %, <=, >=, ==, !=**.

### 5) Nombrado de Variables y funciones
Los nomabres de variables y funciones siempre empiezan con minuscuala y se usa la notacion camel case ejemplo:

``` [javascript]
function imprimeMensaje() {
    console.log('funcion test')
}
```

Los nombres de clase empiezan con mayuscula








