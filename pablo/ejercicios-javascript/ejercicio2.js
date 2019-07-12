const arg = require('yargs').argv
    function areaCirculo(rad) {
        var rad = JSON.parse(arg.radio);   
           return Math.PI*(rad * rad)
    }        console.log("Area= "+ areaCirculo())

    function perimetroCirculo(rad1) {
        var rad1 = JSON.parse(arg.radio);   
            return  Math.PI*(rad1+rad1)  
    }         console.log("Perimetro: "+perimetroCirculo())
          
