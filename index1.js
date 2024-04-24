
//CAMBIAR IDIOMA
const botonCambiarIdioma = document.getElementById('changeLanguage');
const textoCambiante = document.getElementById('textChanged');

let idiomaActual = 'en'; 

botonCambiarIdioma.addEventListener('click', () => {
    if (idiomaActual === 'es') {
        textoCambiante.innerHTML = `<h1><mark>Saludo y Descripción EN INGLES </mark>.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus, facere ratione laudantium quaerat quos sequi dolorum, nisi, assumenda atque asperiores nemo non. </p>
        <p>Eaque impedit blanditiis aspernatur assumenda? Tempora possimus asperiores, ipsa reiciendis tempore, doloremque quidem aperiam molestias at natus necessitatibus, provident blanditiis iusto? Nostrum!</p>
        <p> Necessitatibus dignissimos ad alias tempora ab pariatur quia totam assumenda, itaque dolorem fuga iste, ducimus animi unde fugit! Omnis quisquam illum reiciendis.</p>`;
        botonCambiarIdioma.textContent = 'EN';
        idiomaActual = 'en'; 
    } else {
        textoCambiante.innerHTML =`<h1><mark>Saludo y Descripción de tu persona</mark>.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus, facere ratione laudantium quaerat quos sequi dolorum, nisi, assumenda atque asperiores nemo non. </p>
        <p>Eaque impedit blanditiis aspernatur assumenda? Tempora possimus asperiores, ipsa reiciendis tempore, doloremque quidem aperiam molestias at natus necessitatibus, provident blanditiis iusto? Nostrum!</p>
        <p> Necessitatibus dignissimos ad alias tempora ab pariatur quia totam assumenda, itaque dolorem fuga iste, ducimus animi unde fugit! Omnis quisquam illum reiciendis.</p>`;
        botonCambiarIdioma.textContent = 'ES';
        idiomaActual = 'es'; 
    }
});

//EASTEREGG 
document.addEventListener('click', function(event) {
    const letraEspecifica = '❤️'; 
    
    if (event.target.textContent.toLowerCase() === letraEspecifica) {
        const corazon = document.createElement('span');
        corazon.classList.add('corazon');
        corazon.innerHTML = '&hearts;';
        corazon.style.left = Math.random() * window.innerWidth + 'px';
        corazon.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 1500); 
    }
});


