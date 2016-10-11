# Document Object Model
## Selección de nodos

```html
<p id="identificador"></p>
<p class="clase"></p>
<p >Hola</p>

<script>
    var elementoPorId = document.getElementById("identificador")
    elementoPorId.innerHTML = "Seleccioneado por id";

    var elementoPorClassName = document.getElementsByClassName("clase")
    elementoPorClassName.innerHTML = "Seleccioneado por clase";

    var elementosPorTagName = document.getElementsByTagName("P")
    for (i = 0; i < elementosPorTagName.length; i++) {
        elementosPorTagName[i].style.backgroundColor = "blue";
    }
    
</script>
```


## Propiedades
```html
<p id="identificador"></p>

<script>
    var elemento = document.getElementById("identificador")
    elemento.innerHTML = "Hola Mundo";
    elemento.style.color = "red";
    elemento.setAttribute("style", "background-color: green;");

</script>
```
## Eventos
```html
<p id="identificador" onclick="saludar()" onmouseover="sobrevuela(this)">Te saludo</p>

<script>
    var elemento = document.getElementById("identificador")
    elemento.onclick = function(){
        console.log('Hola desde el código');
    }
    function saludar(){
        console.log('Hola desde una etiqueta');
    }
    function sobrevuela(elementoSobrevolado){
        elementoSobrevolado.innerHTML = "elemento Sobrevolado";
    }
</script>
```

#Browser Object Model

```javascript
    window.open();
    window.innerHeight = 50;
    console.log(window.document.getElementsByTagName(*).length);
    console.log(document.getElementsByTagName(*).length);
    console.log(screen.width);
    console.log(window.location.href);
    window.location.assign("http://academia-binaria.com");
    window.history.back();
    console.log(JSON.stringify(navigator));
    var usuario = window.prompt("¿Cómo te llamas?", "Forastero");
    window.alert(usuario);
```