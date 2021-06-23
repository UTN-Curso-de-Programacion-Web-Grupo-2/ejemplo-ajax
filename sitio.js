var boton_formulario = document.querySelector("#formulario")
var boton_noticias = document.querySelector("#noticias")

// Si apreto el boton del formulario, realizo una peticion que trae el archivo contacto.html
// y lo inserta dentro del main
boton_formulario.addEventListener("click", function() {

    var peticion = new XMLHttpRequest();

    peticion.open("GET", "contacto.html", true);

    peticion.onreadystatechange = function() {

        
         // Si yo quiero saber si la peticion termino, el atributo readyState tiene que ser igual a 4
         if (peticion.readyState == 4) {
            
            // Si quiero saber si termino bien, el atributos status debe valer 200
            if (peticion.status == 200) {
                console.log("Peticion exitosa")
                console.log(peticion.response)
                var miMain = document.querySelector("main");
                miMain.innerHTML = peticion.response
            }

        }

    }

    peticion.send()

})

// Si apreto este otro boton, realizo una peticion que trae el archivo noticias.html
// y lo inserta dentro del main
boton_noticias.addEventListener("click", function() {

    var peticion = new XMLHttpRequest();

    peticion.open("GET", "noticias.html", true);

    peticion.onreadystatechange = function() {

        
         // Si yo quiero saber si la peticion termino, el atributo readyState tiene que ser igual a 4
         if (peticion.readyState == 4) {
            
            // Si quiero saber si termino bien, el atributos status debe valer 200
            if (peticion.status == 200) {
                console.log("Peticion exitosa")
                console.log(peticion.response)
                var miMain = document.querySelector("main");
                miMain.innerHTML = peticion.response
            }

        }

    }

    peticion.send()

})