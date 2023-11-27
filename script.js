let container = document.querySelector(".container");
let songsContainer = container.querySelector(".songs-container");
let addButton = container.querySelector(".form__submit-btn_action_add");
let songs = songsContainer.querySelectorAll('.song');
let resetButton = container.querySelector(".form__submit-btn_action_reset");


function renderAdded() {
    let songs = songsContainer.querySelectorAll('.song');

    if (songs.length === 0) {
        resetButton.setAttribute("disabled", true);
        resetButton.classList.add("form__submit-btn_disabled");
    } else {
        resetButton.removeAttribute("disabled");
        resetButton.classList.remove("form__submit-btn_disabled");
    }
}


function addSong() {
    let artist = document.querySelector('.input__text_type_artist');
    let song = document.querySelector('.input__text_type_song');

    songsContainer.insertAdjacentHTML('beforeend', `
      <div class="song">
        <h4 class="song__artist">${artist.value}</h4>
        <p class="song__title">${song.value}</p>
        <button class="song__like"></button>
      </div>
    `);
    artist.value = '';
    song.value = '';
    renderAdded();
}
addButton.addEventListener("click", addSong);


function renderAdded() {
    let songs = songsContainer.querySelectorAll('.song');
    let noSongsElement = container.querySelector(".no-songs");

    if (songs.length === 0) {
        resetButton.setAttribute("disabled", true);
        resetButton.classList.add("form__submit-btn_disabled");
        noSongsElement.classList.remove("no-songs_hidden");
    } else {
        resetButton.removeAttribute("disabled");
        resetButton.classList.remove("form__submit-btn_disabled");
        noSongsElement.classList.add("no-songs_hidden");
    }
}
addButton.addEventListener("click", addSong);


function resetPlaylist() {
    let noSongsElement = container.querySelector(".no-songs");
    songsContainer.innerHTML = "";
    if (songs.length === 0) {
        noSongsElement.classList.remove("no-songs_hidden");
    } else {
        noSongsElement.classList.add("no-songs_hidden");
    }
}
resetButton.addEventListener("click", resetPlaylist);
form.addEventListener("submit", addSong);



//Вызов функции
renderAdded();