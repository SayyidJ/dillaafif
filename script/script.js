const btnCopy = document.querySelector("#btn-copy");
const btnMusic = document.getElementById("btn-music");
let canCopy = true;

btnCopy.addEventListener("click", function (e) {
  if (canCopy) {
    const norek = "202701005192505";
    navigator.clipboard.writeText(norek).then(async function () {
      canCopy = false;
      btnCopy.textContent = "Berhasil dicopy";
      await new Promise((r) => setTimeout(r, 2000));
      btnCopy.textContent = "copy";
      canCopy = true;
    });
  }
});

const getTamu = () => {
  let param = new URLSearchParams(window.location.search);

  if (param.has("to")) {
    const kepada = document.querySelector("#kepada");
    const tamu = param.get("to");
    kepada.textContent = tamu;
  }
};

getTamu();

const buka = () => {
  const scaffold = document.querySelector("#main-scaffold");

  scaffold.classList.add("is-open");
  const music = document.getElementById("music");
  music.play();
};

btnMusic.addEventListener("click", () => {
  const music = document.getElementById("music");
  if (music.paused) {
    music.play();
    // play_music_button.className = 'pause';
  } else {
    music.pause();
    // play_music_button.className = 'play';
  }
  music.addEventListener("ended", function () {
    // play_music_button.className = 'play';
  });
});
