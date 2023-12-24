//PASO1:
//necesito
//evento del boton
//condicional para que ingresen valores validos
//valores de los input
//crear un objeto con los valores del input
//array
//guardar en el localStorage 
//PASO2:
//traer las paletas guardadas en el localStorage con un boton y mostrarlas en el DOM
//PASO3:creo un catalogo y lo muestro en el DOM
//PASO4: método para filtrar el catálogo


//traigo los elementos input y el boton por id y los guardo en variables:
//input,boton y div para agregar paletas
let nombrePaleta = document.getElementById("nombre")
let saborPaleta = document.getElementById("sabor")
let precioPaleta = document.getElementById("precio")
let stockPaleta = document.getElementById("stock")
let botonAgregarPaleta = document.getElementById("agregar")
let resultadoContenedor1 = document.getElementById("resultadoContenedor1")
//boton para traer las paletas guardadas en el localStorage
let traerPaleta = document.getElementById("traerPaletas")
//boton y div para el catálogo
let botonCatalogo = document.getElementById("Catalogo")
let resultadoContenedor2 = document.getElementById("resultadoContenedor2")
//input y div para filtrar catálogo
let inpFiltrarCatalogo = document.getElementById("filtrar")
let btnFiltrarCatalogo = document.getElementById("filtrarC")
let resultadoContenedor3 = document.getElementById("resultadoContenedor3")
//boton y div resultado clientes de api
let resultadoContenedor4 = document.getElementById("resultadoContenedor4")
let btnInfoClientes = document.getElementById("infoClientes")


  
  //para que al cargar la pagina traiga el catalogo del localStorage y lo imprima en el DOM
  window.onload = function(){
    let catalogoGuardado = localStorage.getItem("catalogo")
    let paletaGuardada = localStorage.getItem("PaletaAgregada")
    if(catalogoGuardado && paletaGuardada){
        listaCatalogo = JSON.parse(catalogoGuardado)
        listaPaletasAgregadas = JSON.parse(paletaGuardada)
        mostrarPaletasCatalogo()
    }
} 
  

//creo una class constructora para crear objetos
class Paleta{
    constructor(nombre, sabor, precio, stock){
        this.nombre = nombre,
        this.sabor = sabor,
        this.precio = precio,
        this.stock = stock
    }
    mostrarPaletasAgregadas(){
        //vacio el div para no repetir contenido.
        resultadoContenedor1.innerHTML = ""
        //recorro el array y lo imprimo en el DOM
        listaPaletasAgregadas.forEach(function(elemento){
            resultadoContenedor1.innerHTML += `Nombre: ${elemento.nombre}, Sabor: ${elemento.sabor}, Precio: ${elemento.precio}, Cantidad en stock: ${elemento.stock}<br/>`
          })
    }
}

//array vacio para paleta agregada
let listaPaletasAgregadas = []
//array vacio para catalogo
let listaCatalogo = []




// evento del boton para agregar la paleta
botonAgregarPaleta.addEventListener("click", function(){
    //guardo los valores de los input en variables
    let valorInput1 = nombrePaleta.value
    let valorInput2 = saborPaleta.value
    let valorInput3 = parseFloat(precioPaleta.value)
    let valorInput4 = parseInt(stockPaleta.value)
     //creo el objeto con la class constructora y los valores que ingrese en los input
     const paletaIngresada = new Paleta(valorInput1, valorInput2, valorInput3, valorInput4)
      //vacio los input luego del click del boton
    nombrePaleta.value = ""
    saborPaleta.value = ""
    precioPaleta.value = ""
    stockPaleta.value = ""
    //condicional para que el usuario ingrese valores válidos
    if(paletaIngresada.nombre===""||paletaIngresada.sabor===""||paletaIngresada.precio==="" ||paletaIngresada.stock ==="" ){Swal.fire("Por favor ingresar valores válidos");
    }else{
      // agrego el objeto a mi array
    listaPaletasAgregadas.push(paletaIngresada) 
    //guardo el array en el localStorage como JSON
    localStorage.setItem("PaletaAgregada", JSON.stringify(listaPaletasAgregadas))}
    //llamo a la fcion que recorre y muestra el array en el DOM
    paletaIngresada.mostrarPaletasAgregadas() 
     })

     //creo un evento al boton para traer paletas agregadas desde el localStorage e imprimirlo en el DOM
     traerPaleta.addEventListener("click", function(){
        let paletaGuardada = localStorage.getItem("PaletaAgregada")
            if(paletaGuardada){
                listaPaletasAgregadas = JSON.parse(paletaGuardada)
                mostrarPaletas2()}
            })
            //funcion para mostrar paletas en el DOM
            function mostrarPaletas2(){
             //vacio el div para no repetir contenido.
             resultadoContenedor1.innerHTML = ""
            //recorro el array y lo imprimo en el DOM
             listaPaletasAgregadas.forEach(function(elemento){
            resultadoContenedor1.innerHTML += `Nombre: ${elemento.nombre}, Sabor: ${elemento.sabor}, Precio: ${elemento.precio}, Cantidad en stock: ${elemento.stock}<br/>`
             })
            }


            //creo un catálogo
            //instancio los objetos con la class Paleta
    const paleta1 = new Paleta ("oreo", "galletitas", 450,6)
    const paleta2 = new Paleta ("chocolate con chips", "chocolate", 450,10)
    const paleta3 = new Paleta ("tramontana", "americana con galletitas de chocolate", 450,6)
    const paleta4 = new Paleta ("frutillita", "frutilla", 500,20)
    const paleta5 = new Paleta ("banana split", "banana y dulce de leche", 500,5)
    //agrego los objetos al array
    listaCatalogo.push(paleta1,paleta2,paleta3,paleta4,paleta5)
    
    //evento para el boton del catálogo
    botonCatalogo.addEventListener("click", function(){
        //vacio el contenedor 
    resultadoContenedor2.innerHTML = ""
    //guardo el array en el localStorage
    localStorage.setItem("catalogo", JSON.stringify(listaCatalogo))
    //llamo a la funcion que muestra el catalogo en el DOM
    mostrarPaletasCatalogo()
})
//funcion para mostrar el catalogo en el DOM
function mostrarPaletasCatalogo(){
    //vacio el div para no repetir contenido.
    resultadoContenedor2.innerHTML = ""
   //recorro el array y lo imprimo en el DOM
    listaCatalogo.forEach(function(elemento){
   resultadoContenedor2.innerHTML += `Nombre: ${elemento.nombre}, Sabor: ${elemento.sabor}, Precio: ${elemento.precio}, Cantidad en stock: ${elemento.stock}<br/>`
  })
  listaPaletasAgregadas.forEach(function(elemento){
    resultadoContenedor2.innerHTML += `Nombre: ${elemento.nombre}, Sabor: ${elemento.sabor}, Precio: ${elemento.precio}, Cantidad en stock: ${elemento.stock}<br/>`
   }
  )}  
   
  
  
   // función para filtrar catálogo(y paletas agregadas al catálogo)
    function filtrarCat(){
        //vacio el contenedor
        resultadoContenedor3.innerHTML = ""
        //obtengo el valor del input donde ingreso el precio
    let precioClave = inpFiltrarCatalogo.value.trim()
    //filtro los precios(los que incluyan el precio clave) y los guardo en variables
    const resultado = listaCatalogo.filter( (paleta)=> `${paleta.precio}`.includes(precioClave))
    const resultado1 = listaPaletasAgregadas.filter( (paleta)=> `${paleta.precio}`.includes(precioClave))
        
      
        if(resultado.length > 0 || resultado1.length >0 ){
        resultado.forEach( function(elemento){
            resultadoContenedor3.innerHTML += `nombre: ${elemento.nombre},sabor:${elemento.sabor},precio: ${elemento.precio},stock: ${elemento.stock}<br/>`
        })
        resultado1.forEach( function(elemento){
            resultadoContenedor3.innerHTML += `nombre: ${elemento.nombre} , sabor:${elemento.sabor} , precio: ${elemento.precio} , stock: ${elemento.stock}<br/>`
        })

    }else{Swal.fire("No hay paletas con ese precio");}
    
    }

    //evento del input del catálogo(para filtrarlo por precio)
   btnFiltrarCatalogo.addEventListener("click",filtrarCat)


   //traer clientes de api
  
   function mostrarClientes(){ 
    let url = "https://jsonplaceholder.typicode.com"
    fetch(`${url}/users`)
   .then( (response)=> response.json())//la respuesta de la api la paso a objeto
   .then( (data)=> {
    const usuarios = data.map((data)=> ` <li> Nombre: ${data.name}, Email: ${data.email} , telefono: ${data.phone} </li> `);
    resultadoContenedor4.innerHTML = `<ul> ${usuarios} </ul>`
   });
    }
  
  
  
   //mostrar los clientes con un boton
  btnInfoClientes.addEventListener("click", mostrarClientes)





