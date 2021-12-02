    /*Declarando variables*/
    const imagenes  = document.querySelectorAll('img');
    const content  = document.querySelector('.contenedor-img');
    const imgContenedor = document.querySelector('.lightBox');

    /*Recorremos las imagenes*/
    imagenes.forEach(image =>{
        image.addEventListener('click', () =>{
            agregarImg (image.getAttribute('src'));            
        });
    });

    /*Agregamos la clase y las imagenes a nuestro contenedor*/
    const agregarImg = (src) =>{
        content.classList.toggle('moverImg');
        imgContenedor.setAttribute('src', src);
    };

    /*agregando evento move al contenedor del LightBox*/
    content.addEventListener('click', () =>{
        content.classList.toggle('moverImg');
    });