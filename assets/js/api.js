var searchBar = document.querySelector('#search');
var cuerpo = document.querySelector('.contenedor');
var data;

const obtenerResultados = async (e) => {
    e.preventDefault();

    cuerpo.innerHTML = `
        <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>
      `

    var gameTitle = document.querySelector('.barra-busqueda').value;

    var url = `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`;

    await fetch(url)
        .then(resultado => resultado.json())
        .then(respuesta => data = respuesta);

    cuerpo.style.display = 'flex';
    cuerpo.style.flexWrap = 'wrap';
    cuerpo.style.justifyContent = 'center';

    cuerpo.innerHTML = '';
    data.map(juego => {
        cuerpo.innerHTML += `<article class='game-box'>
                                <img src="${juego.thumb}" class='game-img'>
                                <div>
                                    <h1 class='game-title'>${juego.external}</h1>
                                    <p class='game-price'>Precio: $${Math.round(juego.cheapest * 721)} CLP</p>                                
                                </div>

                            </article>`;

    })

}

searchBar.addEventListener('submit', obtenerResultados);