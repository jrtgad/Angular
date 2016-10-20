# Elementos HTML5 

```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>El de la pestaña</title>
   </head>
   <body>
      <header >
         <h1>Ejemplo de HTML5 </h1>
         <p>Estructura del documento complejo.</p>
      </header>
      <nav>
         <ul>
            <li><a href="#">HTML5 </a></li>
            <li><a href="#">CSS3 </a></li>
            <li><a href="#">JavaScript 5 - 6 </a></li>
         </ul>
      </nav>
      <article>
        <section>
            <p>El artículo es la unidad fundamental de información</p>
        </section>
        <section>
            <figure align="right">
                <img src="foto.png" alt="una foto" width="200" height="100">
            </figure>
        </section>
      </article>
      <aside>
         <p>Los temas relacionados van aparte</p>
      </aside>     
      <footer>
         <p>Elementos semánticos</p>
      </footer>
   </body>
</html>

```

# APIs

- **Interfaces de almacenamiento:** 
    
    Permiten almacenar datos en el lado cliente, como Web Storage, IndexedDatabase, Web SQL Database (el equipo de trabajo de esta última ha suspendido su desarrollo en el momento de escribir este artículo).

- **Interfaz para el trabajo con aplicaciones en caché:** 
    
    La interfaz Application Cache permite guardar información en el cliente para acceder a la aplicación sin estar online. 
- **Interfaces multimedia:** 
    
    Como MediaStream, cuyo método getUserMedia recoge y crea en el navegador web transmisiones de audio y vídeo desde los periféricos de un ordenador (cámara, micrófono).
    
    Web Audio es una interfaz que permite reproducir y sintetizar sonidos en aplicaciones web.  
    
    Otra API de sonido es Web MIDI.

- **API de Geolocalización:** 
    
    Provee de métodos para el posicionamiento geográfico de los dispositivos. 
- **Web notifications:** 
    
    Esta interfaz permite generar avisos al usuario fuera del contexto de una página web en cuanto se produzca cualquier evento, por ejemplo, la entrada de un nuevo correo electrónico.
- **Los Web Sockets** 

    Mejoran el HTTP para crear conexiones bi-direccionales que pueden mantener los datos fluyendo entre el cliente y el servidor.
- **File API:** 
    
    Gestiona sistemas de archivos en la Web.
- **Canvas (lienzo en inglés):** 

    Es un elemento HTML incorporado en HTML5 que permite generar dinámicamente gráficos 2D, juegos, animaciones y composición de imágenes.
- **WebGL:** 
    
    Una API para mostrar dibujos 3D en el navegador Web sin necesidad de plugins. En la actualidad es soportado principalmente en Internet Explorer (versión 11), Google Chrome y Mozilla Firefox.
- **WebWorkers:**

    Ejecuciones en paralelo para evitar que el subproceso único se quede *congelado*.